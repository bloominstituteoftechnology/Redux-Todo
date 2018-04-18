import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore (Todos)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
