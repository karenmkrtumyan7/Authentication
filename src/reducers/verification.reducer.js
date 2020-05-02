import { authConstants } from "../constants";

const initialState = {
    msg: null,
    loading: true,
    error: false
}

export const verification = (state = initialState, action) => {
    switch(action.type) {
        case authConstants.VERIFY_REQUEST:
            return initialState;
        case authConstants.VERIFY_SUCCESS:
            return {
                msg: action.payload,
                loading: false,
                error: false
            }
        case authConstants.VERIFY_FAILURE:
            return {
                msg: null,
                loading: false,
                error: action.payload
            }
        default: return state
    }
} 