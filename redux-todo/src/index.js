import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './App';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  JSON.parse(localStorage.getItem('redux-todos')) || {},
  applyMiddleware(logger)
);

store.subscribe(() =>
  localStorage.setItem('redux-todos', JSON.stringify(store.getState()))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
