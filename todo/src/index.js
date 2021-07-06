import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import storeHandler from './reducers';
import {loadState, saveState} from './localStorage';

const persistedState = loadState();

const store = createStore(storeHandler, persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
