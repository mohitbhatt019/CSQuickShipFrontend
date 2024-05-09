import React, { createContext, useState } from "react";
import userGlobalConfig from "../constants/globalConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(
    // localStorage.getItem(userGlobalConfig.TOKEN) === null || undefined
    //   ? false
    //   : true
  );

  const login = (token) => {
    
    localStorage.setItem(userGlobalConfig.TOKEN, token.data.token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    
    localStorage.removeItem(userGlobalConfig.TOKEN);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
