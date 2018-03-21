import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import  todos from './reducers/todos';
import Todo from './containers/container'

import './index.css';

const store = createStore(todos);

ReactDOM.render(
<Provider store={store}>
    <Todo />
 </Provider>,
    document.getElementById('root'));
