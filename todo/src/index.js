import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todos from './reducers'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={createStore(todos)}>
    <App />,
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
