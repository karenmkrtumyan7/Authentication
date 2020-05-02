import React from 'react';
import { Link } from "react-router-dom";
import { Loader } from '../Loader';

function ActivationSuccessComponent({ msg, loading, error }) {
    let content;

    if (msg) {
        content = <p>{ msg }</p>;
    } else if (loading) {
        content = <Loader />;
    } else {
        content = <p>{ error }</p>;
    }

    return (
        <div className="account-activation-wrapper">
            <main>
                { content }
                <button><Link to = "/sign-in"> Back to home </Link></button>
            </main>
        </div>
    )
}

export { ActivationSuccessComponent };