import React, { createContext, useCallback, useState } from "react";

import { useCookies } from "react-cookie";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [cookies, setCookies] = useCookies();
  const [token, setToken] = useState(cookies.token);
  const [error, setError] = useState(null);

  const signIn = useCallback(async ({ username, password }, setLoading) => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.token) {
        setCookies(`token`, data.token);
      }

      if (data.err) {
        return setError(data.err);
      }

      setToken(data.token);
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Error signing in. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, error, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
