// React
import React, { Component } from 'react';

// Components
import TodoContainer from './containers/TodoContainer';

// Styles
import './App.css';

class App extends Component {
	render() {
		return (
			<div className = 'app'>
				<header className = 'app-header'>
					<h1>Welcome to your Todo List</h1>
				</header>

				<TodoContainer />
			</div>
		);
	}
}

export default App;
