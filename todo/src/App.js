import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Todo from './components/todo.js';

class App extends Component {
    constructor() {
	super();
	this.state = {
	    todos: []
	};
    }
    
    render() {
	return (
	    <div className="App">
	      <Todo />
	    </div>
	);
    }
}

export default App;

