import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import App from "./App";
import ServiceDetails from "./pages/ServiceDetails"; // Ensure correct import

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/services/details" element={<ServiceDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
