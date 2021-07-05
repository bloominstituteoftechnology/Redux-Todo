import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import TodoList from './components/TodoList';

const persistedData = JSON.parse(window.localStorage.getItem('redux-todo')) || [];

const store = createStore(reducers, persistedData);

store.subscribe(() => {
  localStorage.setItem('redux-todo', JSON.stringify(store.getState()));
})

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.querySelector('#root')
);