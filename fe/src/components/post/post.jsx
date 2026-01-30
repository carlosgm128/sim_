import { useState } from 'react';
import { usePostCommentsByIdQuery } from '../../hooks/usePostQuery.js';

// Styled Components
import { PostWrapper, PostContent, PostTitle, PostBody } from './Post.styles';
import { PostHeader } from './PostHeader';
import { ActionButton, ActionsRow } from '../common/ActionButton.styles';
import { CommentList } from '../comments/CommentList';

export const Post = ({ id, title, body, username }) => {
    const [showComments, setShowComments] = useState(false);
    const [voteCount] = useState(() => Math.floor(Math.random() * 500) + 50);
    const [postTime] = useState(() => `${Math.floor(Math.random() * 23) + 1}h ago`);

    const { data: comments = [], isLoading, error } = usePostCommentsByIdQuery(id, showComments);

    const toggleComments = () => setShowComments((prev) => !prev);

    return (
        <PostWrapper>
            
            <PostContent>
                <PostHeader 
                    author={username} 
                    time={postTime} 
                />
                
                <PostTitle>{title}</PostTitle>
                <PostBody>{body}</PostBody>

                <ActionsRow>
                    <ActionButton
                        className={showComments ? 'active' : ''}
                        onClick={toggleComments}
                    >
                        {comments.length || '...'} Comments
                    </ActionButton>
                </ActionsRow>

                {showComments && (
                    <CommentList 
                        comments={comments}
                        isLoading={isLoading}
                        error={error}
                    />
                )}
            </PostContent>
        </PostWrapper>
    );
};

