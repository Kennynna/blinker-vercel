import type { UseQueryOptions } from '@tanstack/react-query';
import { QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';


function saveTokenToLocalStorage(token: string) {
  localStorage.setItem('authToken', token);
}

function getTokenFromLocalStorage(): string | null {
  return localStorage.getItem('authToken');
}

const api = axios.create({
  baseURL: 'URL',
});


const queryClient = new QueryClient();


function useAuthorizedQuery<TData, TError>(
  queryKey: string,
  queryFn: () => Promise<TData>,
  options?: UseQueryOptions<TData, TError>
) {
  return useQuery<TData, TError>({
    queryKey: [queryKey],
    queryFn: async () => {
      const token = getTokenFromLocalStorage();
      if (!token) {
        throw new Error('Unauthorized: Token not found');
      }
      return queryFn();
    },
    ...options,
  });
}
