import { client } from '../server.js';
import { POSTS_URL } from '../commons.js';

export const getAllPost = async () => {
        console.log("Fetching users...");
        const response = await client.get(`${POSTS_URL}`);
        return response.data;
}