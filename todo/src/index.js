import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { todos } from './Reducer';

const store = createStore(todos, ['Use Redux'])

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
