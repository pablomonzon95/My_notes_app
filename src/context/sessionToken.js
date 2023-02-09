import { createContext, useContext, useEffect, useState } from "react";

const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {
 
    const [token, setToken] =useState(localStorage.getItem('token'));

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])

    const logout = () => {
        setToken(null)
        localStorage.removeItem("token")
    }

  return (
    <SessionContext.Provider value={[token, setToken, logout]}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  return useContext(SessionContext);
};

export {SessionProvider, useSession};