import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Import createStore
import { createStore } from "redux";

//Connecting redux with react
import { Provider } from "react-redux";

//importing reducer
import reducer from "./reducers";

//Creating store
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
