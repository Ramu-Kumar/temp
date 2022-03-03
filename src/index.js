import React from "react";
import ReactDOM from "react-dom";
import 'babel-polyfill';
import Router from "./router";

import './assets/styles/bootstrap.radian.css';

ReactDOM.render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>,
  document.getElementById("root")
);
