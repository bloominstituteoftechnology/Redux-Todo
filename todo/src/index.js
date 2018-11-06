import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import addTodo from "./reducers/todos";

// const reducer = () => {
//   return {
//     todo: [
//       { value: "Get Milk", id: 1, completed: false },
//       { value: "Get Eggs", id: 2, completed: false },
//       { value: "Get Bread", id: 3, completed: false }
//     ]
//   };
// };

const store = createStore(addTodo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);