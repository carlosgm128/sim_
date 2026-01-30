import { User } from './User';
import './User.css';

export default {
    title: 'Components/User/UserCard',
    component: User,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A user card component displaying user information including avatar, name, username, and email.',
            },
        },
    },
    argTypes: {
        name: {
            control: 'text',
            description: 'The full name of the user',
        },
        username: {
            control: 'text',
            description: 'The username displayed with @ prefix',
        },
        email: {
            control: 'text',
            description: 'The email address of the user',
        },
    },
};

export const Default = {
    args: {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john.doe@example.com',
    },
};

export const LongName = {
    args: {
        name: 'Alexander Christopher Williams',
        username: 'alexwilliams',
        email: 'alexander.williams@company.org',
    },
};

export const ShortName = {
    args: {
        name: 'Ana',
        username: 'ana',
        email: 'ana@mail.com',
    },
};

export const MultipleUsers = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <User name="John Doe" username="johndoe" email="john@example.com" />
            <User name="Jane Smith" username="janesmith" email="jane@example.com" />
            <User name="Bob Wilson" username="bobwilson" email="bob@example.com" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Multiple user cards displayed in a list layout.',
            },
        },
    },
};
