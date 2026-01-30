import { ActionButton, ActionsRow } from './ActionButton.styles';

export default {
    title: 'Components/Common/ActionButton',
    component: ActionButton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'An action button used for post interactions like comments, sharing, etc. Supports active state and small variant.',
            },
        },
    },
    argTypes: {
        children: {
            control: 'text',
            description: 'Button content (text and/or icons)',
        },
        $small: {
            control: 'boolean',
            description: 'Renders a smaller version of the button',
        },
        className: {
            control: 'text',
            description: 'Add "active" class for active state styling',
        },
        onClick: {
            action: 'clicked',
            description: 'Function called when button is clicked',
        },
    },
};

export const Default = {
    args: {
        children: '💬 42 Comments',
    },
};

export const Active = {
    args: {
        children: '💬 42 Comments',
        className: 'active',
    },
};

export const Small = {
    args: {
        children: '⬆️ 128',
        $small: true,
    },
};

export const SmallActive = {
    args: {
        children: '⬆️ 128',
        $small: true,
        className: 'active',
    },
};

export const ActionsRowExample = {
    render: () => (
        <ActionsRow>
            <ActionButton>💬 42 Comments</ActionButton>
            <ActionButton>🔗 Share</ActionButton>
            <ActionButton>⭐ Save</ActionButton>
        </ActionsRow>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Multiple action buttons displayed in a row, as typically used in post footers.',
            },
        },
    },
};

export const ActionsRowSmall = {
    render: () => (
        <ActionsRow $small>
            <ActionButton $small>⬆️ 128</ActionButton>
            <ActionButton $small>💬 12</ActionButton>
            <ActionButton $small>🔗</ActionButton>
        </ActionsRow>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Compact action buttons row for smaller spaces.',
            },
        },
    },
};
