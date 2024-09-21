import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {ContactsProvider} from "./context/ContactsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </StrictMode>
);
