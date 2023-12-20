import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { MsalProvider } from "@azure/msal-react";

import "./index.scss";
import "./card.scss";
import { msalInstance } from "./utils/msalUtils.tsx";

const initialUrl = window.location.href;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);

export { initialUrl };