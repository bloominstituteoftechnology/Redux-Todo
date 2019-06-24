import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Import createStore
import { createStore } from "redux";

//Connecting redux with react
import { Provider } from "react-redux";

//importing reducer
import rootReducer from "./reducers";

//Local storage code (optional)
//Importing loadstate for local storage usage
//has to be imported after the reducer to avoid errors
import { loadState, saveState } from "./localStorage";
const persistedState = loadState();

//Creating store and passing the persistedState as second
//argument for the local storage
const store = createStore(rootReducer, persistedState);

//Local storage code (optional)
//The saveState function is called inside
//the store.subscribe listener so it is called
//every time the storage state changes
store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
