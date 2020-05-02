import React from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { AuthLabel } from '../AuthInputLabel';

function SignUpComponent(props) {
    const { 
        email, 
        userName, 
        password, 
        emailError,
        userNameError,
        passwordError,
        apiError,
        emailOnChangeHandler, 
        userNameOnChangeHandler, 
        passwordOnchangeHandler, 
        signUpHandler 
    } = props;

    return (
        <form id="sign-up" onSubmit = { signUpHandler }>
            <h1>Sign Up</h1>
            <input type = "email" 
                   placeholder = "Email" 
                   value = { email }
                   onChange = { emailOnChangeHandler }
                   className = { emailError ? "invalid-input" : "" }/>
            <AuthLabel error = { emailError }/>
            <input type="text" 
                   placeholder="Username" 
                   value = { userName }
                   onChange = { userNameOnChangeHandler }
                   className = { userNameError ? "invalid-input" : "" }/>
            <AuthLabel error = { userNameError }/>
            <input type="password" 
                   placeholder="Password" 
                   value = { password }
                   onChange = { passwordOnchangeHandler }
                   className = { passwordError ? "invalid-input" : "" }/>
            <AuthLabel error = { passwordError }/>
            <AuthLabel error = { apiError }/>
            <button onClick = { signUpHandler }>Sign Up</button>
            <p className="link">Have an account? <Link to="/sign-in">Sign in</Link></p>
        </form>
    )
}

export { SignUpComponent };