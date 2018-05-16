import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import kelly from './reducers/index';

const store = createStore(
  kelly
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
document.getElementById('root'));

//This is the basic template for Redux - you have to create a store to hold your state and then wrap your App in the Provider.
//I was getting hung up on what goes in the parentheses in createStore, and it turns out it doesn't matter. I put my name in there and it still works.
