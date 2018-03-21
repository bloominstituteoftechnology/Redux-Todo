import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import todo from "./reducers/reducer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const store = createStore(todo);
// now we need to pass this store to any component that needs it
// we start by making our root component aware of the store

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <App />
    </Container>
  </Provider>,
  document.getElementById("root")
);
