import React from "react";
import ReactDOM from "react-dom";
import "./gloabal_css/index.css";
import App from "./App";
import { Context } from "./components/ContextAPI/Context";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
