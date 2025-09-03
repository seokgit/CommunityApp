import React, { createContext, ReactNode, useState } from 'react';
import { AuthStatus } from '../types/AuthStatus';

type User = {
  id: string
  name: string
}

interface AuthContextType {
  authStatus: AuthStatus
  user: User | null
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  authStatus: AuthStatus.CHECKING,
  user: null,
  login: (user: User) => { },
  logout: () => { },
});

interface AuthContextProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [authStatus, setLoginStatus] = useState<AuthStatus>(AuthStatus.CHECKING);
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setLoginStatus(AuthStatus.LOGGEDIN)
    setUser(user)
  }

  const logout = () => {
    setLoginStatus(AuthStatus.LOGGEDOUT)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ authStatus: authStatus, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}