import React, { useContext, useState } from "react";

export const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
  const [authData, setAuthData] = useState("");

  const login = (data) => setAuthData(data);
  const logout = () => setAuthData("");

  const value = {
    authData, //info usuari
    login,
    logout,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;

export const useAuth = () => useContext(AuthenticationContext);
