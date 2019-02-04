import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// get the provider and create store
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import persistState from "redux-localstorage";

//import your reducer
import rootReducer from "./reducers/reducer";

// create the store and then pass it to the provider
const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    persistState(null, { key: "test" }),
    applyMiddleware(logger)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
