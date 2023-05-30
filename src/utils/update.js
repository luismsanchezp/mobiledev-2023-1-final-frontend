import { apiCall } from "./http";
import { getToken, verifyToken } from "./jwt";

export async function updateUser(userId, values) {
    const payload = {
        email: values.email,
        password: values.password,
        role: values.role,
        active: values.active,
    };
    const token = getToken();
    const decoded = verifyToken(token);
    if (decoded !== null) {
        await apiCall("put", `/users/${userId}`, payload)
        .then(response => {
            if (response.error) {
                console.log("Error editing user: ", response);
                throw new Error("Error editing user.");
            } else if (response.data) {
                console.log("User edited: ", response.data);
            } else {
                console.log("Unknown error: ", response);
                throw new Error("Unknown error.");
            }
        })
    } else {
        console.log("Invalid token: ", response);
        throw new Error("Invalid token.");
    }
}

export async function updateProfile(userId, values) {
    const payload = {
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
    const token = getToken();
    const decoded = verifyToken(token);
    if (decoded !== null) {
        await apiCall("put", `/users/${userId}/profile`, payload)
        .then(response => {
            if (response.error) {
                console.log("Error editing profile: ", response);
                throw new Error("Error editing profile.");
            } else if (response.data) {
                console.log("Profile edited: ", response.data);
            } else {
                console.log("Unknown error: ", response);
                throw new Error("Unknown error.");
            }
        })
    } else {
        console.log("Invalid token: ", response);
        throw new Error("Invalid token.");
    }
}