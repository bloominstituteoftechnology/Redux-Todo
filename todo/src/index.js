import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from './reducers'

import "./index.css";
import App from "./App";

// createStore requires a reducer.
const store = createStore(reducer); 


ReactDOM.render(
   <Provider store={store}>
    <App />
   </Provider>,
  document.getElementById("root")
);
