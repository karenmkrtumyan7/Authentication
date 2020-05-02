import React from 'react';
import "./ActivationAlert.css";
import { Link } from 'react-router-dom';

export function ActivationAlertComponent() {
    return (
        <div className="account-activation-wrapper">
            <main>
                <h1>Activate <br/> your <br/> account </h1>
                <p>We send an activation link to your email.</p>
                <button><Link to = "/sign-in"> Back to home </Link></button>
            </main>
        </div>
    )
}
