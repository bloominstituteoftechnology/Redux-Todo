import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import { ADD_INITIAL_TODO_ITEMS } from "./actions";
import reducerFunction from "./reducers";
import App from "./App";

import "./index.css";

export const store = createStore(
  reducerFunction,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("Initial State", store.getState());
// add initial values to our todo list

// console.log("State After InitialAdd", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
