import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers/reducer";
import "./index.css";
import App from "./App";

let fromLocal;

if (localStorage.getItem('reduxState')) {
  fromLocal = JSON.parse(localStorage.getItem('reduxState'));
} 

const store = createStore(
  reducer,
  fromLocal,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})