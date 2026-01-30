import styled from 'styled-components';

export const CommentContainer = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 0.5rem;
`;

export const CommentMain = styled.div`
    display: flex;
    width: 100%;
    padding-left: 20px;
    
    &:hover {
        cursor: pointer;
        background-color: #f9f9f9;}
`;

export const CommentContent = styled.div`
    flex: 1;
    min-width: 0;
    padding-left: 0.5rem;
`;

export const CommentHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 0.25rem;
`;

export const CommentAuthor = styled.span`
    font-size: 0.75rem;
    font-weight: 500;
    color: #1a1a1b;
    margin: 0;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const CommentTime = styled.span`
    font-size: 0.75rem;
    color: #787c7e;
`;

export const CommentBody = styled.p`
    font-size: 0.875rem;
    color: #1a1a1b;
    line-height: 1.4;
    margin: 0 0 0.375rem;
    word-wrap: break-word;
`;

export const CommentsSection = styled.div`
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #edeff1;
`;

export const CommentsLoading = styled.p`
    font-size: 0.875rem;
    color: #787c7e;
    padding: 1rem;
`;

export const CommentsError = styled.p`
    font-size: 0.875rem;
    color: #ff4500;
    padding: 1rem;
`;

export const CommentsEmpty = styled.p`
    font-size: 0.875rem;
    color: #787c7e;
    padding: 1rem;
`;
