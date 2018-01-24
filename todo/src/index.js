import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";
import "./index.css";
import App from "./App";

//wrap app from APP in the provider here

const store = createStore(reducers);

ReactDOM.render(
  //can also do store ={createStore(reducers)}>
  //this is how stuff gets rendered. how putting app into DOM.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
