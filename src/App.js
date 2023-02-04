import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./views/ErrorPage";
import { MainPage } from "./views/MainPage";
import { Login } from "./views/Login";
import { Register } from "./views/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
