import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteDataProvider } from "./context/siteDataProvider";
import { AuthProvider } from "./context/AuthProvider";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <SiteDataProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </SiteDataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
