import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "highlight.js/styles/atom-one-dark.css";
import "./style/assets/emoji.min.css";
import "./style.min.css";
import WebApp from "./WebApp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <WebApp />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
