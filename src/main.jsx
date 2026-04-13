import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ScrollContainer from "./components/ScrollContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollContainer>
      <App />
    </ScrollContainer>
  </StrictMode>,
);
