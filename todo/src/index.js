import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Provider store={ createStore(reducers) }>
    <App />
  </Provider>
  , document.getElementById('root')
);



registerServiceWorker();