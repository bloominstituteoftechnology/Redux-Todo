import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// get the provider and create store
import { createStore } from "redux";
import { Provider } from "react-redux";

//import your reducer
import rootReducer from "./reducers/reducer";

// create the store and then pass it to the provider
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
