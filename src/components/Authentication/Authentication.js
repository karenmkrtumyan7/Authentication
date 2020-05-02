import React from 'react';
import "./Authentication.css";

function Authentication(props) {
    return (
        <div className="auth-wrapper">
            <main>
                <div className="auth-image-wrapper">
                    <img draggable="false" src='/images/AuthBackground.png' alt="auth-background"/>
                </div>
                { props.children }
            </main>
        </div>
    );
}

export  { Authentication };