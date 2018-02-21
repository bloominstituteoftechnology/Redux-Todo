import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ToDo from './components/ToDo';
import todo from './reducers/index.js';

const store = createStore(todo);

ReactDOM.render(
  <Provider store={store}>
    <ToDo />
  </Provider>,
  document.getElementById('root')
);