import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import todoReducer from './reducers';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';



const store = createStore( 
  todoReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

