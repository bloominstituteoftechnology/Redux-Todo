import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from 'react-redux';

import todos from "./reducers/index";

import registerServiceWorker from "./registerServiceWorker";

//create store, initial state is "todos"
const store = createStore(todos);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
