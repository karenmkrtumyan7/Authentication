import passwordValidator from 'password-validator';
import validator from 'validator';

const schema = new passwordValidator();

schema
.is().min(8)                                    // Minimum length 8
.is().max(30)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.has().not().spaces()                           // Should not have spaces

const validateUserName = (userName) => {
    if (validator.isEmpty(userName)) {
        return "Username required";
    } else if (userName.length > 15) {
        return "Maximum length 15"
    } else if (!/^(?![_.])/.test(userName)) {
        return "Must not start with _ or .";
    } else if (!/^[a-z0-9._]+$/.test(userName)) {
        return "Must contain a-z _ or ."
    } else {
        return null;
    }
} 

const validatePassword = (password) => {
    if (validator.isEmpty(password)) {
        return "Password is required";
    }
    const message = schema.validate(password, { list: true }).map(current => {
        if (current === "min") {
            return "Minimum length 8";
        } else if (current === "max") {
            return "Maximum length 30";
        } else if (current === "uppercase") {
            return "Must have uppercase letters";
        } else if (current === "lowercase") {
            return "Must have lowercase letters";
        } else if (current === "digits") {
            return "Must have digits";
        } else if (current === "spaces") {
            return "Should not have spaces";
        } else {
            return null;
        }
    });
    return message.length ? message[0] : null;
}

const validateEmail = (email) => {
    if (validator.isEmpty(email)) {
        return "Email is required";
    } else if (!validator.isEmail(email)) {
       return "Email is not correct.";
    }
   return null;
}

export {
    validateEmail,
    validatePassword,
    validateUserName
}
