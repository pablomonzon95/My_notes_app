import "./App.css";
import React from "react";
import { useModal } from "./context/ModalContext";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./views/ErrorPage";
import { MainPage } from "./views/MainPage";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import Modal from "./Components/Modal";
import { UserPanel } from "./views/UserPanel";
import { useSession } from "./context/sessionToken";
import { useEffect } from "react";

function App() {
  const [modal] = useModal();
  const [token] = useSession();

  useEffect(() => {
    if (
      token !== "null" &&
      (window.location.pathname.includes("login") ||
        window.location.pathname === "/" ||
        window.location.pathname === "register" ||
        window.location.pathname === "")
    ) {
      window.location.pathname = "/panel"; // No uso el navigate por estar fuera del provider de router
    } else if (token === "null" && window.location.pathname.includes("panel")) {
      window.location.pathname = "/";
    }
  }, [token]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/panel" element={<UserPanel />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {modal && <Modal>{modal}</Modal>}
    </div>
  );
}

export default App;
