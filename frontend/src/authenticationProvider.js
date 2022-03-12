import React, { useContext, useState, useEffect } from "react";

export const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
  const [authData, setAuthData] = useState("");

  async function authentication() {
    const response = await fetch("/api/auth/getuser", {
      credential: "include",
      // Posar credentials també a favorits pk és perquè et guardi cookie de sessió
      headers: {
        Accept: "application/json",
      },
    });
    try {
      const data = await response.json();
      login(data);
    } catch {
      return null;
    }
  }
  useEffect(() => {
    authentication();
  }, []);

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
