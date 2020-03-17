import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => (
	<div className="App">
		<h1>todo</h1>
		<TodoForm />
		<TodoList />
	</div>
)

export default App;
