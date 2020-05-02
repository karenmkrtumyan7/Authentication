import React from 'react';
import { AuthInputLabelComponent } from "./AuthInputLabel.component";

function AuthInputLabelContainer ({ error }) {
    return <AuthInputLabelComponent error = { error }/>
}

export { AuthInputLabelContainer as AuthLabel }