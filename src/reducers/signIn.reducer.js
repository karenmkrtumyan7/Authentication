import Cookies from "js-cookie";
import { authConstants } from "../constants";

const initialState = Cookies.get("token") && Cookies.get("userId") ? {
    loggedIn: true
} : {
    loggedIn: false
}

export const signIn = (state = initialState, action) => {
    switch(action.type) {
        case authConstants.LOGIN_REQUEST: 
            return { 
                loggedIn: false
            }
        case authConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true
            }
        case authConstants.LOGIN_FAILURE:
            return {
                loggedIn: false
            }
        case authConstants.SIGN_OUT:
            return {
                loggedIn: false
            }
        default: return state;
    }
}

