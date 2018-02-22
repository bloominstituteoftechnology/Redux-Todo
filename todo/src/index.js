import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todo from './reducers';
import registerServiceWorker from './registerServiceWorker';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const store = createStore(todo, persistedState);

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
})



ReactDOM.render(
      <Provider store={store} >
        <App />
      </Provider>
      , document.getElementById('root'));
registerServiceWorker();
