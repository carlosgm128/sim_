import { CommentList } from './CommentList';

export default {
    title: 'Components/Comments/CommentList',
    component: CommentList,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A container component that renders a list of comments with loading, error, and empty states.',
            },
        },
    },
    argTypes: {
        comments: {
            control: 'object',
            description: 'Array of comment objects to display',
        },
        isLoading: {
            control: 'boolean',
            description: 'Shows loading state when true',
        },
        error: {
            control: 'boolean',
            description: 'Shows error state when true',
        },
    },
};

const mockComments = [
    { id: 1, email: 'john.doe@example.com', body: 'Great post! Really enjoyed reading this.' },
    { id: 2, email: 'jane.smith@example.com', body: 'I have a different perspective on this topic.' },
    { id: 3, email: 'bob.wilson@example.com', body: 'Thanks for sharing this information!' },
];

export const WithComments = {
    args: {
        comments: mockComments,
        isLoading: false,
        error: null,
    },
};

export const Loading = {
    args: {
        comments: [],
        isLoading: true,
        error: null,
    },
    parameters: {
        docs: {
            description: {
                story: 'Displays a loading message while comments are being fetched.',
            },
        },
    },
};

export const Error = {
    args: {
        comments: [],
        isLoading: false,
        error: new Error('Failed to load comments'),
    },
    parameters: {
        docs: {
            description: {
                story: 'Displays an error message when comments fail to load.',
            },
        },
    },
};

export const Empty = {
    args: {
        comments: [],
        isLoading: false,
        error: null,
    },
    parameters: {
        docs: {
            description: {
                story: 'Displays a message encouraging users to be the first to comment.',
            },
        },
    },
};

export const ManyComments = {
    args: {
        comments: [
            { id: 1, email: 'user1@example.com', body: 'First comment here!' },
            { id: 2, email: 'user2@example.com', body: 'Second comment with more content to show how it wraps.' },
            { id: 3, email: 'user3@example.com', body: 'Third comment.' },
            { id: 4, email: 'user4@example.com', body: 'Fourth comment with interesting thoughts.' },
            { id: 5, email: 'user5@example.com', body: 'Fifth comment joining the discussion.' },
        ],
        isLoading: false,
        error: null,
    },
    parameters: {
        docs: {
            description: {
                story: 'A list with multiple comments showing the scroll behavior.',
            },
        },
    },
};
