import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ToDo from './components/ToDo';
import todoApp from './reducers';

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <ToDo />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
