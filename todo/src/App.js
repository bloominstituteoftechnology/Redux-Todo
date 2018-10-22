import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		}
	}
  	render() {
		return (
			<div className="App">
				<h1>To Do:</h1>
				<TodoForm />
				<TodoList />
			</div>
		);
  	}
}

export default App;
