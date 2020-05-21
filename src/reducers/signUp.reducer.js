import { authConstants } from "../constants";

const initialState = {
    registered : false,
}

export const signUp = (state = initialState, action) => {
    switch(action.type) {
        case authConstants.REGISTER_REQUEST: 
            return { 
                registered: false,
            }
        case authConstants.REGISTER_SUCCESS:
            return {
                registered: true,
            }
        case authConstants.REGISTER_FAILURE:
            return {
                registered: false,
            }

        default: return state;
    }
}
