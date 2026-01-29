import { client } from '../server.js';
import { USERS_URL } from '../commons.js';

export const getAllUsers = async () => {
        console.log("Fetching users...");
        const response = await client.get(`${USERS_URL}`);
        return response.data;
}