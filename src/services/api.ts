import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import { signOut } from '../contexts/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

export function setupAPIClient() {
  const { '@nextauth.token': token } = parseCookies();

  const api = axios.create({
    baseURL: 'https://dogbreed-api.q9.com.br',
    headers: {
      Authorization: token,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      console.log(error);
      if (error) {
        if (typeof window !== undefined) {
          signOut();
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }
    },
  );

  return api;
}
