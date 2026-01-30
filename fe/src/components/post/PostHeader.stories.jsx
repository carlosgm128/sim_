import { PostHeader } from './PostHeader';

export default {
    title: 'Components/Post/PostHeader',
    component: PostHeader,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The header section of a post displaying subreddit, author, and timestamp information.',
            },
        },
        backgrounds: {
            default: 'light',
        },
    },
    argTypes: {
        subreddit: {
            control: 'text',
            description: 'The subreddit name (displayed as r/name)',
            defaultValue: 'simlimites',
        },
        author: {
            control: 'text',
            description: 'The username of the post author',
        },
        time: {
            control: 'text',
            description: 'Relative timestamp of when the post was created',
        },
    },
};

export const Default = {
    args: {
        subreddit: 'simlimites',
        author: 'johndoe',
        time: '3h ago',
    },
};

export const DifferentSubreddit = {
    args: {
        subreddit: 'technology',
        author: 'techfan',
        time: '1d ago',
    },
};

export const RecentPost = {
    args: {
        subreddit: 'simlimites',
        author: 'newuser',
        time: '5m ago',
    },
};

export const OldPost = {
    args: {
        subreddit: 'programming',
        author: 'developer',
        time: '2y ago',
    },
};

export const LongUsername = {
    args: {
        subreddit: 'simlimites',
        author: 'thisisaverylongusername123',
        time: '12h ago',
    },
};
