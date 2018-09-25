import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {todoReducer} from './reducer/todoReducer.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore} from 'redux';


const store = createStore(
todoReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);






ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));
registerServiceWorker();
