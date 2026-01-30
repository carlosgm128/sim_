import { client } from '../server.js';
import { POSTS_URL } from '../commons.js';

export const getAllPosts = async () => {
        console.log("Fetching posts...");
        const response = await client.get(`${POSTS_URL}`);
        return response.data;
}

export const getPostById = async (postId) => {
    console.log(`Fetching post with ID: ${postId}...`);
    const response = await client.get(`${POSTS_URL}/${postId}`);
    return response.data;
}

export const getPostCommentsById = async (postId) => {
    console.log(`Fetching comments for post with ID: ${postId}...`);
    const response = await client.get(`${POSTS_URL}/${postId}/comments`);
    return response.data;
}