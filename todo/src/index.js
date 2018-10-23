import React from "react";
import ReactDOM from "react-dom";
import App from './app'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import "./styles.css";
import todoReducer from './Reducers/';


const store = createStore(todoReducer)


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement);
