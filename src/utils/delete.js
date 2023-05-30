import { apiCall } from "./http";
import { getToken, verifyToken } from "./jwt";

export async function deleteUser(userId) {
    const token = getToken();
    const decoded = verifyToken(token);
    if (decoded !== null) {
        await apiCall("delete", `/users/${userId}`)
        .then(response => {
            if (response.error) {
                console.log("Error deleting user: ", response);
                throw new Error("Error deleting user.");
            } else if (response.data) {
                console.log("User deleted: ", response.data);
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