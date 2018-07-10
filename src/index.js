import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer/reducer';
import './index.css';
import App from './App';

let storedData;
try {
  storedData = window.localStorage.getItem('saved-todos');
  if (storedData === null) {
    storedData = undefined;
  }
  storedData = { todos: JSON.parse(storedData) };
} catch (error) {
  storedData = undefined;
}
const store = createStore(reducer, storedData, devToolsEnhancer());
store.subscribe(() => {
  store.getState();
  try {
    window.localStorage.setItem('saved-todos', JSON.stringify(store.getState().todos));
  } catch (error) {
    console.log(error);
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
