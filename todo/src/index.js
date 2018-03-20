import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import addTodoReducer from "./Reducers/addTodoReducer";

// const rootReducer = combineReducers({
//   todo: todoReducer
// });

const store = createStore(addTodoReducer);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
