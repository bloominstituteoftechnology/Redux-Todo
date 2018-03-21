import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoReducer from './reducers/todoReducer';

import App from './App';
import './index.css';

const state = {
  todos: todoReducer,
}

const store = createStore(state.todos);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

