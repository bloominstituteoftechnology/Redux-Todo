import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from "./components/TodoList";
import AddTodo from './containers/AddToDo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addToDo = () => {
    const { todos } = this.state;
    const addToDo = {
      todo: todos,
      completed: false
    }
    this.props.addToDo(addToDo);
    this.setState({ todos: '' })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <input 
          onChange={this.handleInputChange} 
          placeholder = "Enter ToDo"
          value={this.state.todos} 
          name="todos"
        />
        <button onClick={this.addToDos}>Submit</button>
        {console.log("PROPS", this.state.todos)};
        {/* <ToDoList list={this.props.todos}/> */}
      </div>
    );
  }
}

export default App;
