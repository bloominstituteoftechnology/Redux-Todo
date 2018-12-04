import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import TodoList from './components/TodoList';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.querySelector('#root')
);