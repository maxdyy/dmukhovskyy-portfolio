import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style/assets/emoji.min.css";
import "./style.min.css";
import WebApp from "./WebApp";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<WebApp />, document.getElementById("root"));
registerServiceWorker();
