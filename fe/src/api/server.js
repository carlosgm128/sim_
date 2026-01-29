import axios from "axios";



export const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export default client;