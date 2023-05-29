import { apiCall } from "./http";

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