import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ToDo from './components/ToDo';
import TodoForm from './components/TodoForm';
import todo from './reducers/index.js';
import './styles.css';

const store = createStore(todo);

ReactDOM.render(
  <Provider store={store}>
  	<div>
	  	<TodoForm />
	    <ToDo />
    </div>
  </Provider>,
  document.getElementById('root')
);