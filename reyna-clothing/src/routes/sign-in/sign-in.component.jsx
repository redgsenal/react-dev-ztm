import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
    auth,
    signInWithGooglePopup,
    //signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
    useEffect(() => {
        //console.log('use effect here')
        async function redirectGoogle() {
            const response = await getRedirectResult(auth)
            //console.log('get redirect result')
            //console.log({ auth })
            //console.log({ response })
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(
                    response.user
                )
                console.log(userDocRef)
            }
        }
        redirectGoogle()
    }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = createUserDocumentFromAuth(user)
        //console.log('google user')
        //console.log({ userDocRef })
        //console.log({ user })
    }
    /* const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect()
        const userDocRef = createUserDocumentFromAuth(user)
        console.log('google redirect')
        console.log({ userDocRef })
        console.log({ user })
    } */
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
            {/*
            if redirect 
            <button onClick={logGoogleRedirectUser}>
                Sign in with Google Redirect
            </button>*/}
            <SignUpForm />
        </div>
    )
}

export default SignIn
