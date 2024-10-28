import { App } from "@/App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import "./reset.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
