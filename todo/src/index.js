import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './reducer';

const store = createStore(todoReducer);

ReactDOM.render(
<Provider>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
