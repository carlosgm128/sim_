import { PostMeta, Subreddit, MetaSeparator, PostAuthor, AuthorName, PostTime } from './Post.styles';

export const PostHeader = ({ subreddit = 'simlimites', author, time }) => {
    return (
        <PostMeta>
            <Subreddit>r/{subreddit}</Subreddit>
            <MetaSeparator>•</MetaSeparator>
            <PostAuthor>
                Posted by <AuthorName>u/{author}</AuthorName>
            </PostAuthor>
            <MetaSeparator>•</MetaSeparator>
            <PostTime>{time}</PostTime>
        </PostMeta>
    );
};
