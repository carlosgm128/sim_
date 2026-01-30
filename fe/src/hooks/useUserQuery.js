import { useQuery } from '@tanstack/react-query';
import { getAllUsers, getUserById } from '../api/services/userServices.js';

export const useFetchAllUser = () => {
    return useQuery({ queryKey: ['users'], queryFn: getAllUsers, initialData: [] });
}

export const useFetchUserById = (userId) => {
    return useQuery({
        queryKey: ['user', userId],
        queryFn: () => getUserById(userId),
        enabled: !!userId,
        initialData: null,
    });
}


