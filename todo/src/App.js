import React, { Component } from 'react';
import './App.css';
import Todo from './containers/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
				  <div>
					<Todo />
      </div>
		</div>
    );
  }
}

export default App;