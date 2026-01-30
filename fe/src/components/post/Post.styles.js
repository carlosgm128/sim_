import styled from 'styled-components';

export const PostWrapper = styled.article`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.5rem;
    background-color: var(--card-background, #ffffff);
    width: 100%;
    max-width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    margin-bottom: 0.75rem;
    border: 1px solid #ccc;
    transition: border-color 0.15s ease;

    &:hover {
        border-color: #898989;
    }
`;

export const PostContent = styled.div`
    flex: 1;
    min-width: 0;
    padding: 0.5rem;
`;

export const PostMeta = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    font-size: 0.75rem;
    color: #787c7e;
    margin-bottom: 0.5rem;
`;

export const Subreddit = styled.span`
    font-weight: 700;
    color: #1a1a1b;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const MetaSeparator = styled.span`
    color: #787c7e;
`;

export const PostAuthor = styled.span`
    color: #787c7e;
    font-size: 0.75rem;
`;

export const AuthorName = styled.span`
    color: #1a1a1b;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const PostTime = styled.span`
    color: #787c7e;
`;

export const PostTitle = styled.h2`
    font-size: 1.125rem;
    font-weight: 500;
    color: #1a1a1b;
    margin: 0 0 0.75rem;
    line-height: 1.3;
`;

export const PostBody = styled.p`
    font-size: 0.875rem;
    color: #1a1a1b;
    line-height: 1.5;
    margin: 0 0 0.75rem;
`;
