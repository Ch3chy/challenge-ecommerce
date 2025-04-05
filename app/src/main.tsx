import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./base/styles/index.scss";
import { BaseRoutes } from "./base";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<BaseRoutes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
