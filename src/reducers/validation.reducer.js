import { authConstants, validationConstants } from "../constants";

const initialState = {
    msg: null,
}

export const validation = (state = initialState, action) => {
    switch(action.type) {
        case authConstants.REGISTER_FAILURE:
        case authConstants.LOGIN_FAILURE:
            return action.payload ? action.payload : state;
        case authConstants.REGISTER_SUCCESS:
        case authConstants.REGISTER_REQUEST:
        case authConstants.LOGIN_SUCCESS: 
        case authConstants.LOGIN_REQUEST:
        case validationConstants.VALIDATION_REQUEST:
            return initialState;
        default: return state;
    }
}