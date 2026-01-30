import { Button } from './Button';

export default {
    title: 'Components/Common/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A styled button component used for primary actions throughout the application.',
            },
        },
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'The content of the button',
            defaultValue: 'Click me',
        },
        onClick: {
            action: 'clicked',
            description: 'Function called when button is clicked',
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button when true',
        },
    },
};

export const Default = {
    args: {
        children: 'Click me',
    },
};

export const Primary = {
    args: {
        children: 'Primary Action',
    },
};

export const WithLongText = {
    args: {
        children: 'This is a button with longer text',
    },
};

export const Disabled = {
    args: {
        children: 'Disabled Button',
        disabled: true,
    },
};
