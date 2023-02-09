import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/ModalContext";
import { SessionProvider } from "./context/sessionToken";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Creamos el browser para las rutas */}
    <BrowserRouter>
      <SessionProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
      </SessionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
