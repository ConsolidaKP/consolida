'use client'

import { logIn, logOut, whoAmI } from "@/services/auth.service";
import { createContext, useEffect, useState } from "react";

interface AuthContextValues {
  loading: boolean;
  token: string | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  login: (credentials: Credentials) => Promise<{ error: string } | undefined | void>;
  logout: () => void;
}

const defaultProvider: AuthContextValues = {
  loading: false,
  token: null,
  setLoading: () => Boolean,
  setToken: () => null,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};
const AuthContext = createContext<AuthContextValues>(defaultProvider);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);
  const [token, setToken] = useState<string | null>(defaultProvider.token);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const storedToken = window.localStorage.getItem('accessToken');
        setLoading(true);
        try {
          const response = await whoAmI(storedToken);
          setToken(storedToken);
        } catch (error) {
          console.error('Error from whoAmI:', error);
          localStorage.removeItem('accessToken');
        } finally {
          setLoading(false);
        }
      } catch (error) {
        console.error('Unexpected error in initAuth:', error);
        setLoading(false);
      }
    };


    initAuth()
  }, [])

  const handleLogin = async (credentials: Credentials) => {
    setLoading(true);
    try {
      const res = await logIn(credentials);

      if (res.error)
        return res;

      const { access_token, ...userData } = res

      setToken(access_token);

      window.localStorage.setItem('accessToken', access_token)


    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setToken(null);
    window.localStorage.removeItem('accessToken');
    await logOut();
    setLoading(false);
  };

  const values: AuthContextValues = {
    loading,
    token,
    setLoading,
    setToken,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

