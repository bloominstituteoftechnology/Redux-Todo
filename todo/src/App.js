import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/ToDoList';
import TodoForm from './Components/ToDoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [], 
      inputText: ''
    };
  };

  inputHandler = e => {
    this.setState({inputText: e.target.value});
  };

  addTodo = e => {
    e.preventDefault();
    if (this.state.inputText) {
      this.setState({
        list: [...this.state.list, {text:this.state.inputText, completed: false, id: Date.now()}],
        inputText: ""
      });
    }
  };

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Emily's To Do List:</h1>
        </header>
        <TodoForm
        addTodo= {this.addTodo}
        inputHandler = {this.inputHandler} 
        inputText={this.state.inputText}/>
        <TodoList  list={this.state.list} />
      </div>
    );
  }
}

export default App;
