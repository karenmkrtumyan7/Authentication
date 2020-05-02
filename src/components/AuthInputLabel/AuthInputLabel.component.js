import React from 'react';

export function AuthInputLabelComponent ({ error }) {
    return error ? <p className = "validation-error">{ error }</p> : null ;
}