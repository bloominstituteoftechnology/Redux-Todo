import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList/TodoList'
import reducers from './reducers/reducers';

let STORAGE_WAREHOUSE = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
