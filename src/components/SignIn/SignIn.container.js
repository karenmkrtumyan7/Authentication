import React, { useState, useEffect } from 'react';
import { SignInComponent } from './SignIn.component';
import { signIn, requestValidationState } from "../../actions";
import { connect } from 'react-redux';
import { 
    validateUserName,
    validatePassword
} from "../../services";

function SignInContainer(props) {
    const { msg, requestValidationState } = props;
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userNameError, setUserNameError] = useState(null);
    const [passwordError, setPasswordError] =  useState(null);
    const [apiError, setApiError] = useState(null);

    useEffect(() => {
        setApiError(msg);
    }, [msg]);

    useEffect(() => {
        return () => {
            requestValidationState();
            setUserName("");
            setPassword("");
            setUserNameError(null);
            setPasswordError(null);
        }
    }, [requestValidationState]);

    const signInHandler = (event) => {
        event.preventDefault();
        
        const requestPermission = userName && password && !userNameError && 
                                  !passwordError && !apiError; 
        if (requestPermission) {
            signIn(userName, password);
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
        
        if (msg) {
            requestValidationState();
        }
    }

    return (
        <SignInComponent  username = { userName }
                          password = { password }
                          userNameOnChangeHandler = { userNameOnChangeHandler }
                          passwordOnChangeHandler = { passwordOnChangeHandler }
                          signInHandler = { signInHandler }
                          userNameError = { userNameError }
                          passwordError = { passwordError }
                          apiError = { apiError }/>
    )
}

const mapStateToProps = ({ validation }) => validation;
const mapDispatchToProps = { requestValidationState };
const connectedSignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignInContainer);

export { connectedSignInContainer as SignIn }