import React, { useEffect } from 'react';
import { ActivationAlertComponent } from './ActivationAlert.component';
import { signUpRequest } from '../../actions';
import { connect } from "react-redux";

function ActivationAlertContainer(props) {
    const { signUpRequest } = props;

    useEffect(() => {
        return () => signUpRequest();
    }, [signUpRequest]);

    return <ActivationAlertComponent />
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpRequest: () => dispatch(signUpRequest()),
    }
}

const connectedActivationAlert = connect(null, mapDispatchToProps)(ActivationAlertContainer);

export { connectedActivationAlert as ActivationAlert }