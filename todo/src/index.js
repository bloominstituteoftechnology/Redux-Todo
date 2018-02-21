import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(reducers);
//create your store in `src/index.js`.  The `<Provider >` component will wrap `<App />` 
//and you will pass the created store into `<Provider >` as one of its properties.
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));

