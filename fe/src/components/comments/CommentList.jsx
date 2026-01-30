import { Comment } from './CommentItem';
import { CommentsSection, CommentsLoading, CommentsError, CommentsEmpty } from './Comment.styles';

export const CommentList = ({ comments = [], isLoading, error }) => {
    return (
        <CommentsSection>
            {isLoading && <CommentsLoading>Loading comments...</CommentsLoading>}
            {error && <CommentsError>Error loading comments</CommentsError>}
            {!isLoading && !error && comments.length === 0 && (
                <CommentsEmpty>No comments yet. Be the first!</CommentsEmpty>
            )}
            {!isLoading && !error && comments.map((c) => (
                <Comment
                    key={c.id}
                    author={c.email.split('@')[0]}
                    time={`${Math.floor(Math.random() * 12) + 1}h ago`}
                    body={c.body}
                    upvotes={Math.floor(Math.random() * 100)}
                />
            ))}
        </CommentsSection>
    );
};
