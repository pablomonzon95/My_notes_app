import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const logout = () => {
    console.log("adios");
    setToken(null);
    localStorage.removeItem("token");

    navigate(`/`);
  };

  return (
    <SessionContext.Provider value={[token, setToken, logout]}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  return useContext(SessionContext);
};

export { SessionProvider, useSession };
