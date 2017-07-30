import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import registerServiceWorker from './misc/registerServiceWorker'; // <--- ??????????
import App from './components/App';
import trunkToRootReducer from './reducers'; // <--- ./reducers/index.js

import './css/index.css';


let STORAGE_WAREHOUSE = createStore(trunkToRootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={STORAGE_WAREHOUSE}>
    {/* <a href="https://youtu.be/v2f8kd1d278?t=7s">ROOT</a> */}
    <App />
  </Provider>,
  document.getElementById('root'));

// registerServiceWorker(); // <-------------------------------------------- ??????????
