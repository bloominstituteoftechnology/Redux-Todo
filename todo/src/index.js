import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Todo from "./components/Todo.js";

import todo from "./reducers/index.js";

const store = createStore(todo);

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById("root")
);
