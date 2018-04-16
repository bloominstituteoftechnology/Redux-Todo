import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux';
import addTodo from './reducers/todos';

//create store
const store = createStore(addTodo);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
