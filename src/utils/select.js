import { apiCall } from "./http";
import { getToken, verifyToken } from "./jwt";

//Retrieve states from the API
export async function getStates() {
    return await apiCall("get", "/states")
    .then(response => {
        if (response.data) {
            return response.data;
        } else if (response.errors) {
            console.log("Invalid data: ", response);
            throw new Error("Invalid data.");
        } else {
            console.log("Unknown error: ", response);
            throw new Error("Unknown error.");
        }
    })
}

//Retrieve cities from the API
export async function getCities() {
    return await apiCall("get", `/cities`)
    .then(response => {
        if (response.data) {
            return response.data;
        } else if (response.errors) {
            console.log("Invalid data: ", response);
            throw new Error("Invalid data.");
        } else {
            console.log("Unknown error: ", response);
            throw new Error("Unknown error.");
        }
    })
}

//From an array of cities, an the code of the state, get the cities that belong to the state
export function getCitiesByState(cities, stateCode) {
    return cities.filter(city => city.stateCode === stateCode);
}

export async function getUsers() {
    const token = getToken();
    if (token) {
        const decoded = verifyToken(token);
        if (decoded !== null) {
            const user = await apiCall("get", `/users`);
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