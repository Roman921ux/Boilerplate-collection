import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import BrowserProvider from "./providers/BrowserProvider.tsx";
//
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import GravityProvider from "./providers/GravityProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserProvider>
      <GravityProvider>
        <App />
      </GravityProvider>
    </BrowserProvider>
  </StrictMode>,
);
