import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todos from './reducers/todos'
import './index.css';

const store = createStore(todos)

ReactDOM.render(
    <Provider store={store}>
        <todos />
    </Provider>, 
    document.getElementById('root')
);

