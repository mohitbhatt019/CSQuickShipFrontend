import React, { createContext, useEffect, useState } from "react";
import userGlobalConfig from "../constants/globalConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   // localStorage.getItem(userGlobalConfig.TOKEN) === null || undefined
  //   //   ? false
  //   //   : true
  // );

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    // Get the value of "oidc.default" from session storage
    const oidcDefault = sessionStorage.getItem("oidc.default");
    
    // Parse the JSON string to an object
    const oidcDefaultObj = JSON.parse(oidcDefault);
    
    // Extract the accessToken from the object
    const accessToken = oidcDefaultObj?.tokens?.accessToken;
    
    // Check if accessToken exists and update the isAuthenticated state
    setIsAuthenticated(accessToken ? true : false);
  }, []);

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
