import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoList from './components/TodoList';
import { todoReducer } from './reducers';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoReducer) // takes in a reducer fxn


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
