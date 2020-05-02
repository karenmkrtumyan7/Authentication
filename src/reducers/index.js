import { combineReducers } from "redux";
import { signIn } from "./signIn.reducer";
import { validation } from "./validation.reducer";
import { signUp } from "./signUp.reducer";
import { verification } from "./verification.reducer";

export default combineReducers({
    signUp,
    signIn,
    validation,
    verification
});