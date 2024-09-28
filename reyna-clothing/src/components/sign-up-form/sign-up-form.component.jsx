import { useState } from 'react'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    console.log({ formFields })
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <>
            <h1>Sign up with you email and password.</h1>
            <form onSubmit={() => {}}>
                <label for="displayName">Display Name</label>
                <input
                    required
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                ></input>
                <label for="email">Email</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                ></input>
                <label for="password">Password</label>
                <input
                    required
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                ></input>
                <label name="confirmPassword">Confirm Password</label>
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
