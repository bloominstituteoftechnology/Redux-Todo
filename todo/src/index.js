import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux"; //gives us access to createStore function from redux
import { Provider } from "react-redux"; //gives us access to Provider Component, which makes our app aware of store

import reducer from "./reducers";

import "./index.css";
import TodoApp from "./components/TodoApp";

const store = createStore(reducer); //createStore function receives reducer responsible for updating the store, along with any initial state

//Provider is where store lives and it makes our app aware of store, by wrapping our component inside of it
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
