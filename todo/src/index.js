import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import Todo from './components';

import todos from './reducers/todos';

const store = createStore(todos);



ReactDOM.render(
<Provider store={store}>
<Todo />
</Provider>,
document.getElementById('root')
);

