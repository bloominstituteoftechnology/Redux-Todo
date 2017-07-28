import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'


let STORAGE_WAREHOUSE = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
    {/* <a href="https://youtu.be/v2f8kd1d278?t=7s">ROOT</a> */}
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
