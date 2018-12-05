import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./Reducer"
import App from "./App"



  
const store = createStore(reducer)

const rootElement = document.getElementById("root")

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
