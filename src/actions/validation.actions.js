import { validationConstants } from "../constants";

export const requestValidationState = () => {
    return { type: validationConstants.VALIDATION_REQUEST };
}