import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import TodoList from './components/todosList';
import todoReducer from './reducers'

import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
  <div>
    <App />,
    {/* <TodoList />,  */}
  </div>
  </Provider>,
    document.getElementById("root")
);
