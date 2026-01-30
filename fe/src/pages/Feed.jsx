import { Post } from '../components/post/Post.jsx';
import { usePostQuery } from '../hooks/usePostQuery.js';
import { useFetchAllUser } from '../hooks/useUserQuery.js';

export const Feed = () => {

    const { data: postList = [], isLoading: postsLoading, error: postsError } = usePostQuery();
    const { data: users = [], isLoading: usersLoading, error: usersError } = useFetchAllUser();

    const getUserById = (userId) => {
        const foundUser = users.find((u) => u.id === userId);
        return foundUser ? foundUser.username : "Unknown User";
    };

    if (postsLoading || usersLoading) return <div className="loading-state">Loading posts...</div>;
    if (postsError || usersError) return <div className="error-state">Error loading posts</div>;

    return (
        <div>
            <div className="page-header">
                <h1>Feed</h1>
            </div>
            <div className="posts-feed">
                {postList.map((p) => (
                    <Post key={p.id} id={p.id} title={p.title} body={p.body} username={getUserById(p.userId)} />
                ))}
            </div>
        </div>
    );

}