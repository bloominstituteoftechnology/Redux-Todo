import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  	constructor(props) {
		super(props);
	}
  	render() {
		return (
			<div className="App">
				<h1>todo</h1>
				<TodoForm />
				<TodoList />
			</div>
		);
  	}
}

export default App;
