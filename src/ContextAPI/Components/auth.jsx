import React, { createContext, useContext, useState, useEffect } from 'react';
import { login_user, getLogin_user } from '../APIs/api';
import { useCookies } from 'react-cookie';

// Step 1: Create the context
const AuthContext = createContext();

// Step 2: Create a custom hook for using the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// Step 3: Define the AuthProvider component
export const AuthProvider = ({ children }) => {
  // State for user information
  const [user, setUser] = useState(null);

  // State for managing cookies
  const [setCookie, removeCookie] = useCookies();

  // Function for user login
  async function login(body) {
    try {
      const res = await login_user(body);
      if (res?.success) {
        setUser(res.user);
        setCookie('pk2', res.hash, {
          path: '/',
          maxAge: 6000000,
        });
      }
      return res;
    } catch (error) {
      console.log('Error occurred during login:', error);
      return { success: false, message: 'An error occurred during login' };
    }
  }

  // Function for getting logged-in user information
  async function getLoggedInUser() {
    try {
      const response = await getLogin_user();
      if (response.success) {
        setUser(response.message);
      }
      return response;
    } catch (error) {
      console.log('Error occurred while fetching logged-in user:', error);
      return {
        success: false,
        message: 'An error occurred while fetching user information',
      };
    }
  }

  // Function for user logout
  function logout() {
    removeCookie('pk2');
    setUser(null);
  }

  // useEffect to get logged-in user information on component mount
  useEffect(() => {
    getLoggedInUser();
  }, []);

  // Provide the AuthContext value to children components
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        getLoggedInUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
