import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import todoReducer from "./reducers/reducer";

const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
