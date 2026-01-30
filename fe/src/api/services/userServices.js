import { client } from '../server.js';
import { USERS_URL } from '../commons.js';

export const getAllUsers = async () => {
        console.log("Fetching users...");
        const response = await client.get(`${USERS_URL}`);
        return response.data;
}

export const getUserById = async (userId) => {
    console.log(`Fetching user with ID: ${userId}...`);
    const response = await client.get(`${USERS_URL}/${userId}`);
    return response.data;
}