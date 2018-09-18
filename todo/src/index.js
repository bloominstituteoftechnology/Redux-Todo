import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//port registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Todo from './components/todo.js';
import todo from './reducers/index.js';

const store = createStore(todo);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

//gisterServiceWorker();
