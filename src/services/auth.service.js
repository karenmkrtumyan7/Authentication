import Cookies from "js-cookie";
import { checkResponseStatus } from "../helpers/checkResponseStatus";

function signIn(requestBody) {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    return fetch("http://localhost:8000/auth/signin", requestOptions)
                .then(checkResponseStatus)
                .then(({ token, userId }) => {
                    Cookies.set("token", token);
                    Cookies.set("userId", userId);
            });
}

function signUp(requestBody)  {
    const requestOptions = {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    return fetch("http://localhost:8000/auth/signup", requestOptions)
                .then(checkResponseStatus)
}

function signOut() {
    Cookies.remove("token");
    Cookies.remove("userId");
}

function checkToken() {
    const requestOptions = {
        headers: {
                "Content-Type": "application/json",
                authorization : `Bearer ${Cookies.get("token")}`,
        }
    }
    
    return fetch(`http://localhost:8000/user/current/${Cookies.get("userId")}`, requestOptions)
        .then(checkResponseStatus)
        .then(({ token, userId }) => { 
                Cookies.set("token", token);
                Cookies.set("userId", userId);
        })
        .catch(() => {
                signOut();
                return Promise.reject();
        })
}

function verifyAccount(pathname) {
    return fetch(`http://localhost:8000/auth${pathname}`)
        .then(checkResponseStatus)
}

export {
    signIn,
    signUp,
    signOut,
    checkToken,
    verifyAccount
}
