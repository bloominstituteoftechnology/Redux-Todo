import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ToDoList from './components/todoList'
import Reducer from './reducers/index';
import './index.css';


const store = createStore(Reducer);

ReactDOM.render(
    <Provider store={store}>
        <ToDoList />
    </Provider>,
     document.getElementById('root'));

