export { getAllUsers, getUserById } from './services/userServices.js'
export { getAllPosts, getPostById, getPostCommentsById } from './services/postServices.js'
import * as client from './server.js';

export { client };