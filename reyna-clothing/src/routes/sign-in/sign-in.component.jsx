import { useEffect } from 'react'
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    useEffect(() => {
        //redirectGoogleUser(auth)
    }, [])

    /* const redirectGoogleUser = async (auth) => {
        const response = await getRedirectResult(auth)
        console.log(response)
        if (response) {
            const userDocRef = createUserDocumentFromAuth(response.user)
        }
        console.log('hey!')
    } */
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = createUserDocumentFromAuth(user)
    }
    /* const logGoogleRedirectUser = async () => {
        const { user } = await signInWithGoogleRedirect()
        //const userDocRef = createUserDocumentFromAuth(user)
        console.log({ user })
    } */
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google PopUp</button>
            <button onClick={logGoogleRedirectUser}>
                Sign in with Google Redirect
            </button>
        </div>
    )
}

export default SignIn
