import React, { Component } from 'react';
import TodoList from './Component/TodoList';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TodoList />
			</div>
		);
	}
}

export default App;
