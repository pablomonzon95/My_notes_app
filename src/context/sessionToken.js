import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const logout = () => {
    swal("Thank you for using our app.See you later!!");
    setToken(null);
    localStorage.removeItem("token");

    setTimeout(() => {
      navigate(`/`);
    }, 1000);
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
