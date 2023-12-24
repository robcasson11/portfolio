import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteDataProvider } from "./context/siteDataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <SiteDataProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </SiteDataProvider>
    </Router>
  </React.StrictMode>
);
