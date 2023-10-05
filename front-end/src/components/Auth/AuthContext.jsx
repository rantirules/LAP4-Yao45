import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

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
  const [displayName, setDisplayName] = useState('')
  const [userId, setUserId] = useState()
  console.log({userId})
  console.log(userName);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`http://127.0.0.1:5000/users/${userName}`)
      const data = response.json()
      setDisplayName(data.user.username)
      setUserId(data.user.id)
      console.log(displayName);
      console.log('AUTH HERE');
      console.log(userId);
    }

  })

  // Function to handle user login
  const login = async (userName) => {
    setIsLoggedIn(true);
    setUserName(userName)
    console.log(userName)
    const res = await axios.get(`http://127.0.0.1:5000/users/${userName}`)

    localStorage.setItem('user', res.data.user.id)
  };

  // async function getId(userName) {
  //   console.log(userName)
  //   const res = await axios.get(`http://127.0.0.1:5000/users/${userName}`)
  //   return res.data.user.id
  // }

  // Function to handle user logout
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.clear()
  };

  const value = {
    isLoggedIn,
    login,
    logout,
    userName,
    userId
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
