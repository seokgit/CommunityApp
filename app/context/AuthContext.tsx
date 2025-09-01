import React, { createContext, ReactNode, useState } from 'react';
import { AuthStatus } from '../types/AuthStatus';

interface AuthContextType {  
  loginStatus: AuthStatus
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  loginStatus: AuthStatus.CHECKING,  
  login: () => {},
  logout: () => {},
});

interface AuthContextProps {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthContextProps) => {    
    const [loginStatus, setLoginStatus] = useState<AuthStatus>(AuthStatus.CHECKING);
    
    const login = () => {        
        setLoginStatus(AuthStatus.LOGGEDIN)
    }

    const logout = () => {
        setLoginStatus(AuthStatus.LOGGEDOUT)
    }

 return (
    <AuthContext.Provider value={{  loginStatus, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}