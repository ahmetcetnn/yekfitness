import React, { createContext, useState } from "react";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    data: window.localStorage.getItem("user") || null,
  });

  const setAuthData = (action) => {
    setAuth({ data: action.payload });
    window.localStorage.setItem("user", JSON.stringify(action.payload));
  };

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
