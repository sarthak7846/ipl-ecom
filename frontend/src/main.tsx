import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
import Confirmation from "./components/Confirmation.tsx";
import ProtectedLayout from "./layouts/ProtectedLayout.tsx";
import PublicLayout from "./layouts/PublicLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/" element={<ProtectedLayout />}>
          <Route path="/home" element={<App />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Toaster />
  </StrictMode>
);
