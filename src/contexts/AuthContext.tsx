import { createContext, ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';
import { api } from '../services/apiClient';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signUp: (email: string) => Promise<void>;
  signOut: () => void;
};

type UserProps = {
  email: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, '@nextauth.token');
    Router.push('/');
  } catch {
    console.log('erro ao deslogar');
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@nextauth.token': token } = parseCookies();

    if (token) {
      try {
        Router.push('/list');
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  async function signUp(email) {
    try {
      const response = await api.post('/register', {
        email,
      });
      const { token } = response.data.user;

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 3600 * 24 * 30,
        path: '/',
      });

      setUser({
        email,
      });

      api.defaults.headers['Authorization'] = token;
      Router.push('/list');
    } catch (err) {
      console.log(err);
    }
  }

  // return (
  //   <AuthContext.Provider value={{ user, isAuthenticated, singUp}}>
  //     {children}
  //   </AuthContext.Provider>
  // );
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
