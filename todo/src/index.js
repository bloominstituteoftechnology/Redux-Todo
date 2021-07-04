import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import App from "./App";
import todos from "./reducers";

const persistedState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const store = createStore(todos, persistedState, applyMiddleware(logger));

store.subscribe(()=>{
  localStorage.setItem('todos', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
