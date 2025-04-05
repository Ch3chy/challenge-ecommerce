import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/globals.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
