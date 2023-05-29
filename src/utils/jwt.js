import { apiCall } from "./http";
import jwt_decode from "jwt-decode";

export function verifyToken(token) {
    let decoded = null;
    try {
        decoded = jwt_decode(token);
        if (decoded.exp < Date.now() / 1000) {
            console.log("Token expired.");
            decoded = null;
        }
    } catch (error) {
        console.log("Invalid token: ", error);
    }
    return decoded;
}

export function getToken() {
    const token = localStorage.getItem("token");
    return token;
}

export async function logIn(values) {
    const loginPayload = {
        email: values.email,
        password: values.password,
    };
    await apiCall("post", "/login", loginPayload)
    .then(response => {
        if (response.accessToken) {
            const token = response.accessToken;
            const decoded = verifyToken(token);
            if (decoded !== null) {
                localStorage.setItem("token", token);
                window.location.href = "/";
                //Remove lines and add them in the sing in website
            } else {
                console.log("Invalid token: ", response);
                throw new Error("Invalid token.");
                //return {error: "token_invalid"};
            }
        } else if (response.error) {
            if (!response.error.active) {
                throw new Error("not_active");
            }
            //return response.error;
        } else {
            console.log("Invalid credentials: ", response);
            throw new Error("Invalid credentials.");
            //return response.error;
        }
    })
}

export async function signUp(values) {
    const signupPayload = {
        email: values.email,
        password: values.password
    };
    await apiCall("post", "/users", signupPayload)
    .then(response => {
        if (response.data) {
            console.log("User created: ", response.data);
        } else if (response.errors) {
            console.log("Invalid data: ", response);
            throw new Error("Invalid data.");
        } else {
            console.log("Unknown error: ", response);
            throw new Error("Unknown error.");
        }
    })
}

export async function logOut() {
    localStorage.removeItem("token");
    window.location.href = "/signin";
}

export async function getUser() {
    const token = getToken();
    if (token) {
        const decoded = verifyToken(token);
        if (decoded !== null) {
            const user = await apiCall("get", `/users/${decoded.id}`);
            if (user.data) {
                return user.data;
            } else {
                console.log("Invalid data: ", user);
                throw new Error("Invalid data.");
            }
        } else {
            console.log("Invalid token.");
            throw new Error("Invalid token.");
        }
    } else {
        console.log("No token provided.");
        throw new Error("No token provided.");
    }
}