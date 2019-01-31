import React from "react";
import ReactDOM from "react-dom";

import { Provide } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducer";
import "./index.css";
import App from "./App";

const store = createStore(reducer);

ReactDOM.render(
  <Provide store={store}>
    <App />
  </Provide>,
  document.getElementById("root")
);
