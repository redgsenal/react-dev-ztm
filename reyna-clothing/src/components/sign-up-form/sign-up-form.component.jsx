import { useState } from 'react'
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    // console.log({ formFields })

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('hey submit')
        console.log({ formFields })
        if (confirmPassword !== password) {
            alert('Confirm Password Not Match')
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            )
            console.log({ user })
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (error) {
            console.log('user creation error: ', error)
            if (error.code === 'auth/email-already-in-use') {
                alert('Invalid email. Email is in use')
            } else {
                alert('Error creating user account.')
            }
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <>
            <h1>Sign up with you email and password.</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display Name</label>
                <input
                    required
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                ></input>
                <label htmlFor="email">Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                ></input>
                <label htmlFor="password">Password</label>
                <input
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                ></input>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    required
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                ></input>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default SignUpForm
