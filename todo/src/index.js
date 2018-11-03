import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todos from './reducers/index.js';

import './index.css';
import App from './App';

const store = createStore(
  todos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>, document.getElementById('root'));
