import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';          // commented out
import { Provider } from 'react-redux';           // building up store
import { createStore } from 'redux';               // building up store
import { topTodoReducer } from './reducers/topTodoReducer';           // building up store

const store = createStore(topTodoReducer);
// const store = createStore(topTodoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

