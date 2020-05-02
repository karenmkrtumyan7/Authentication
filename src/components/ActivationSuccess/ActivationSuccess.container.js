import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { ActivationSuccessComponent } from './ActivationSuccess.component';
import { verifyAccount } from '../../actions';


function ActivationSuccessContainer(props) {
    const location = useLocation();
    const { pathname } = location;
    const { msg, loading, error } = props;

    useEffect(() => {
        verifyAccount(pathname);
    }, [pathname]);

    return <ActivationSuccessComponent msg = { msg }
                                       loading = { loading }
                                       error = { error }/>
}

const mapStateToProps = ({ verification }) => verification
const connectedActivationSuccess = connect(mapStateToProps)(ActivationSuccessContainer)

export { connectedActivationSuccess as ActivationSuccess };