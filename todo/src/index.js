import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './reducers';
import './index.css';
import App from './App';

const persistedState = localStorage.getItem('todos') 
  ? JSON.parse(localStorage.getItem('todos')) 
  : {};

const store = createStore(todos, persistedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState()));
  localStorage.setItem('index', JSON.stringify(store.getState().todos.length))
})