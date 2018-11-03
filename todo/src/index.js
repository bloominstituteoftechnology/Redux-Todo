import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todos from './components/Todos';
import todos from './reducers';

const store = createStore(todos);

ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById('root')
);
