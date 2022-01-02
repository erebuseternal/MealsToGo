import React, { useState, createContext } from 'react';

import { loginRequest, registerRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export function AuthenticationContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: passwords don't match.");
    } else {
      registerRequest(email, password)
        .then((u) => {
          setUser(u);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.toString());
        });
    }
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
