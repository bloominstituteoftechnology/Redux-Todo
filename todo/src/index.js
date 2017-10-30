import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
