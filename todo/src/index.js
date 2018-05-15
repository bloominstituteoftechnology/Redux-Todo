import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux"; // takes our store and turns it into our Application's State!
import { toDoReducer } from "./reducers";

const store = createStore(
    toDoReducer // our root reducer is only an empty array, UNTIL our action is dispatched
  ); 

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
   
