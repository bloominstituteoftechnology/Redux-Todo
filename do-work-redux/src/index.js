// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Components
import App from './App';
import taskReducer from './reducers';
// Styles
import './index.css';

import { loadState, saveState } from './localStorage';

// const persistedState = loadState();

const persistedState = loadState();

// Create store
const store = createStore(
  taskReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
