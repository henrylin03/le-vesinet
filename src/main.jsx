import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/normalise.css";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
