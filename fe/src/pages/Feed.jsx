import { useEffect, useState } from 'react';
import { getAllPost } from '../api/services/postServices';
import { getAllUsers } from '../api/services/userServices.js';
import { Post } from '../components/post/post.jsx';

export const Feed = () => {

    const [post, setPost] = useState([]);
    const [user, setUsers] = useState([]);

    useEffect(() => {
        getAllPost().then((data) => {
           setPost(data);
        });
    }, [])
    useEffect(() => {
        getAllUsers().then((data) => {
           setUsers(data);
        });
    }, [])

    const getUserById = (userId) => {
        const foundUser = user.find((u) => u.id === userId);
        return foundUser ? foundUser.username : "Unknown User";

    }

    return (
        <div >
            {post.map((p) => (
                <Post key={p.id} title={p.title} body={p.body} username={getUserById(p.userId)} />
            ))}
        </div>
    );


}