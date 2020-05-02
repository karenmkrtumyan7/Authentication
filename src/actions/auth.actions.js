import { authService } from "../services";
import { authConstants } from "../constants";
import { store } from "../helpers";

const dispatch = store.dispatch;

const signUpRequest = () => ({ type: authConstants.REGISTER_REQUEST });

const signIn = (userName, password) => {
    dispatch(request());

    authService.signIn({ userName, password })
        .then( () => dispatch(success()) )
        .catch((error) => {
            if (error.hasOwnProperty("user")) {
                if (!error.user.active) {
                    return dispatch({ type: authConstants.REGISTER_SUCCESS });
                }
            }
            dispatch(failure(error));
        });
    
    function request() { return { type: authConstants.LOGIN_REQUEST } };
    function success() { return { type: authConstants.LOGIN_SUCCESS } };
    function failure(payload) { return { type: authConstants.LOGIN_FAILURE, payload } };
}

const signUp = (email, userName, password) => {
    dispatch(request());
    
    authService.signUp({ email, userName, password })
        .then( () => dispatch(success()) )
        .catch( (error) => dispatch(failure(error)) );

    function request() { return { type: authConstants.REGISTER_REQUEST } };
    function success() { return { type: authConstants.REGISTER_SUCCESS } };
    function failure(payload) { return { type: authConstants.REGISTER_FAILURE, payload } };
}

const verifyAccount = (pathname) => {
    dispatch(request());

    authService.verifyAccount(pathname)
        .then( ({ msg }) => dispatch(success(msg)) )
        .catch( ({ msg }) => dispatch(failure(msg)) )
    
    function request() { return { type: authConstants.VERIFY_REQUEST } };
    function success(payload) { return { type: authConstants.VERIFY_SUCCESS, payload } };
    function failure(payload) { return { type: authConstants.VERIFY_FAILURE, payload } };
};

const signOut = () => {
    authService.signOut();
    dispatch({ type: authConstants.SIGN_OUT });
}

const checkToken = () => {
    authService.checkToken()
        .then(() => dispatch({ type: authConstants.LOGIN_SUCCESS }))
        .catch(() => dispatch({ type: authConstants.LOGIN_FAILURE }))
}

export { 
    signIn, 
    signUp, 
    signOut, 
    verifyAccount, 
    checkToken, 
    signUpRequest,
}