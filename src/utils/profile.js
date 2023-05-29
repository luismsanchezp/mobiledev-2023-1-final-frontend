import { apiCall } from "./http";
import { verifyToken, getToken } from "./jwt";

export async function createProfile(values) {
    const decoded = verifyToken(getToken());
    if (decoded !== null) {
        const profilePayload = {
            names: values.names,
            lastnames: values.lastnames,
            gender: values.gender,
            birthdate: values.birthdate,
            govIdType: values.govIdType,
            govId: values.govId,
            phoneNumber: values.phoneNumber,
            state: values.state,
            city: values.city,
        };
        await apiCall("post", `/users/${decoded.id}/profile`, profilePayload)
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
    } else {
        console.log("Invalid token: ", getToken());
        throw new Error("Invalid token.");
    }
}