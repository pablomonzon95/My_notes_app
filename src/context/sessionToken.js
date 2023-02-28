import swal from "sweetalert";

import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Contexto utilizado para el manejo de sesiones a traves del jsonwebtoken
//Tambien tiene una funcion de logout.

const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {

  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));

  const [adminId, setAdminId] = useState(localStorage.getItem("id"));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("id", adminId)
  }, [adminId]);

  const logout = () => {
    swal("Thank you for using our app.See you later!!");
    setToken(null);
    localStorage.removeItem("token");

    setTimeout(() => {
      navigate(`/`);
    }, 500);
  };

  return (
    <SessionContext.Provider value={[token, setToken, logout, setAdminId]}>
      {children}
    </SessionContext.Provider>
  );
};

const useSession = () => {
  return useContext(SessionContext);
};

export { SessionProvider, useSession };
