import styled from 'styled-components';

export const ActionButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: ${props => props.$small ? '0.25rem 0.5rem' : '0.5rem 0.75rem'};
    font-size: ${props => props.$small ? '0.6875rem' : '0.75rem'};
    font-weight: 700;
    color: #878a8c;
    background: none;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    box-shadow: none;
    transition: background 0.1s;

    &:hover {
        background-color: #e8e8e8;
        transform: none;
    }

    &.active {
        color: var(--primary-color, #08ACF2);
        background-color: rgba(8, 172, 242, 0.1);
    }
`;

export const ActionsRow = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.$small ? '0.125rem' : '0.25rem'};
    flex-wrap: wrap;
    ${props => props.$small && 'margin-left: -0.5rem;'}
`;
