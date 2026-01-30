import {
    CommentContainer,
    CommentMain,
    CommentContent,
    CommentHeader,
    CommentAuthor,
    CommentTime,
    CommentBody
} from './Comment.styles';

export const Comment = ({ author, time, body, upvotes = 0 }) => {
    return (
        <CommentContainer>
            <CommentMain>
                <CommentContent>
                    <CommentHeader>
                        <CommentAuthor>u/{author}</CommentAuthor>
                        <CommentTime>• {time}</CommentTime>
                    </CommentHeader>
                    <CommentBody>{body}</CommentBody>
                </CommentContent>
            </CommentMain>
        </CommentContainer>
    );
};
