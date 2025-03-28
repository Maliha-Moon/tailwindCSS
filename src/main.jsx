import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import LandingPage from "./project/landingPage.jsx";
import HoverFocusState from "./project/hoverFocusState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HoverFocusState />
  </StrictMode>
);
