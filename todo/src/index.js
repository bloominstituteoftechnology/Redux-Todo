import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import {todo} from './reducers';

const store = createStore(todo);

store.subscribe(()=> {
  console.log(store.getState());
});

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
 document.getElementById('root')
);

