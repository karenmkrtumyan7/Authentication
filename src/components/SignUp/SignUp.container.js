import React, { useState, useEffect } from 'react';
import { SignUpComponent } from './SignUp.component';
import { signUp, requestValidationState } from "../../actions";
import { connect } from 'react-redux';
import { 
    validateUserName,
    validateEmail,
    validatePassword
} from "../../services";

function SignUpContainer(props) {
    const { msg, requestValidationState } = props;
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(null);
    const [userNameError, setUserNameError] = useState(null);
    const [passwordError, setPasswordError] =  useState(null);
    const [apiError, setApiError] = useState(null);
    
    useEffect(() => {
        setApiError(msg);
    }, [ msg ]);

    useEffect(() => {
        return () => {
            requestValidationState();
            setEmail("");
            setUserName("");
            setPassword("");
            setEmailError(null);
            setUserNameError(null);
            setPasswordError(null);
        }
    }, [ requestValidationState ]);

    const signUpHandler = (event) => {
        event.preventDefault();
        
        const requestPermission = email && userName && password && !emailError && 
                                  !userNameError && !passwordError && !apiError; 

        if (requestPermission) {
            signUp(email, userName, password);
        }
    }

    const emailOnChangeHandler = (event) => {
        const message = validateEmail(event.target.value);
        setEmail(event.target.value);
        setEmailError(message);
        
        if (msg) {
            requestValidationState();
        }
    }

    const userNameOnChangeHandler = (event) => {
        const message = validateUserName(event.target.value);
        setUserName(event.target.value);
        setUserNameError(message);
        
        if (msg) {
            requestValidationState();
        }
    }

    const passwordOnChangeHandler = (event) => {
        const message = validatePassword(event.target.value);
        setPassword(event.target.value);
        setPasswordError(message);
    }
    
    return (
        <SignUpComponent email = { email }
                         userName = { userName }
                         password = { password }
                         emailOnChangeHandler = { emailOnChangeHandler }
                         userNameOnChangeHandler = { userNameOnChangeHandler }
                         passwordOnchangeHandler = { passwordOnChangeHandler } 
                         signUpHandler = { signUpHandler }
                         emailError = { emailError }
                         userNameError = { userNameError }
                         passwordError = { passwordError }
                         apiError = { apiError }/>
    )
}

const mapStateToProps = ({ validation }) => validation;
const mapDispatchToProps = { requestValidationState };
const connectedSignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);

export { connectedSignUpContainer as SignUp };