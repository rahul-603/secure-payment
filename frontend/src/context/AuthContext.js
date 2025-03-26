import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); // Add userName state

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName"); // Retrieve userName from localStorage
    setIsLoggedIn(!!token);
    setUserName(name || ""); // Set userName if available
  }, []);

  const login = (token, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userName", name); // Save userName to localStorage
    setIsLoggedIn(true);
    setUserName(name); // Set userName in state
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName"); // Remove userName from localStorage
    setIsLoggedIn(false);
    setUserName(""); // Clear userName in state
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;