import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducers";
import TodoContainer from "./Containers/TodoContainer";

const store = createStore(todoReducer);

const App = () => {
  return (
    <div>
      <TodoContainer />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
