import { Comment } from './CommentItem';
import { CommentList } from './CommentList';

export default {
    title: 'Components/Comments/Comment',
    component: Comment,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A single comment component displaying author, timestamp, and comment body. Used within CommentList.',
            },
        },
    },
    argTypes: {
        author: {
            control: 'text',
            description: 'The username of the comment author',
        },
        time: {
            control: 'text',
            description: 'Relative timestamp of when the comment was posted',
        },
        body: {
            control: 'text',
            description: 'The content/body of the comment',
        },
        upvotes: {
            control: 'number',
            description: 'Number of upvotes on the comment',
        },
    },
};

export const Default = {
    args: {
        author: 'johndoe',
        time: '2h ago',
        body: 'This is a great post! Thanks for sharing.',
        upvotes: 42,
    },
};

export const LongComment = {
    args: {
        author: 'writerfan',
        time: '5h ago',
        body: 'This is a much longer comment that contains multiple sentences. It demonstrates how the comment component handles longer text content and maintains proper readability with appropriate line height and word wrapping.',
        upvotes: 156,
    },
};

export const RecentComment = {
    args: {
        author: 'newuser',
        time: '1m ago',
        body: 'Just saw this, amazing!',
        upvotes: 3,
    },
};

export const HighUpvotes = {
    args: {
        author: 'popularposter',
        time: '12h ago',
        body: 'This comment got a lot of attention!',
        upvotes: 1284,
    },
};
