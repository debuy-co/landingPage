import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import "./assets/icons/icon-font.css"; //this is for importing the icons
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
