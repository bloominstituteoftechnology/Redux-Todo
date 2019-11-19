import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import itemList from './reducers';

import './index.css';
import App from './App';

let store = createStore(itemList)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
