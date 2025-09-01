import React, { createContext, ReactNode, useState } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,  
  login: () => {},
  logout: () => {},
});

interface AuthContextProps {
    children: ReactNode
}

export const AuthProvider = ({ children }: AuthContextProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    
    const login = () => {
        setIsLoggedIn(true);
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

 return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}