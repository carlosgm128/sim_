import { useQuery } from '@tanstack/react-query'
import { getAllPosts,getPostById, getPostCommentsById } from '../api/services/postServices.js';

export const usePostQuery = () => {
    return useQuery({ queryKey: ['posts'], queryFn: getAllPosts })
}

export const usePostByIdQuery = (postId) => {
    return useQuery({ queryKey: ['post', postId], queryFn: () => getPostById(postId), enabled: !!postId })
}

export const usePostCommentsByIdQuery = (postId, enabled = false) => {
    return useQuery({ queryKey: ['post', postId, 'comments'], queryFn: () => getPostCommentsById(postId), enabled: !!postId && enabled })
}  