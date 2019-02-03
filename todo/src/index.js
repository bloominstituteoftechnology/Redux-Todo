import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './reducer/reducer';
import { loadState, saveState } from './localstorage';

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
,document.getElementById('root'));