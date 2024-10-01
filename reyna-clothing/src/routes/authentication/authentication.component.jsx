import { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
    auth,
    signInWithGooglePopup,
    //signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

const Authentication = () => {
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

    /* const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect()
        const userDocRef = createUserDocumentFromAuth(user)
        console.log('google redirect')
        console.log({ userDocRef })
        console.log({ user })
    } */
    return (
        <div>
            <h1>Sign In Page</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication
