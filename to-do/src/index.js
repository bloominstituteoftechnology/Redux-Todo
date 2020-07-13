import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todos from "./reducers";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={createStore(todos)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
