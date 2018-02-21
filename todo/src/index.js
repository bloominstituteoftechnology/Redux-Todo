import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todo from "./reducers";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const store = createStore(todo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
