import React from 'react';
import "./SignIn.css";
import { Link } from 'react-router-dom';
import { AuthLabel } from '../AuthInputLabel';

function SignInComponent(props) {
    const { 
        userName, 
        password, 
        userNameError,
        passwordError,
        apiError,
        userNameOnChangeHandler, 
        passwordOnChangeHandler,
        signInHandler, 
    } = props;

    return (
        <form id = "sign-in" onSubmit = { signInHandler }>
            <h1>Sign In</h1>
            <input type = "text" 
                   placeholder = "Username" 
                   value = { userName }
                   onChange = { userNameOnChangeHandler }
                   className = { userNameError ? "invalid-input" : "" }/>
            <AuthLabel error = { userNameError }/>
            <input type = "password" 
                   placeholder = "Password" 
                   value = { password }
                   onChange = { passwordOnChangeHandler }
                   className = { passwordError ? "invalid-input" : "" }/>
            <AuthLabel error = { passwordError }/>
            <AuthLabel error = { apiError } />
            <button onClick = { signInHandler }>Sign In</button>
            <p className = "link">Don't have an account yet? <Link to="/sign-up">Sign up</Link></p>
        </form>
    );
}

export { SignInComponent };