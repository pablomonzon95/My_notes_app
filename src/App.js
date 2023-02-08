import "./App.css";
import React from "react";
import { useModal } from "./context/ModalContext";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./views/ErrorPage";
import { MainPage } from "./views/MainPage";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import Modal from "./Components/Modal";

function App() {
  const [modal] = useModal();
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {modal && <Modal>{modal}</Modal>}
    </div>
  );
}

export default App;
