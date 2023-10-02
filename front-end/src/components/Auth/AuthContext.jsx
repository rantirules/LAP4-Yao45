import React, { createContext, useContext, useState } from 'react';

// Create an authentication context
const AuthContext = createContext();

// Export a custom hook to access the context
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component to wrap your app with
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('')
  // Function to handle user login
  const login = (userName) => {
    setIsLoggedIn(true);
    setUserName(userName)
    console.log(userName)
  };

  // Function to handle user logout
  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    login,
    logout,
    userName
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
