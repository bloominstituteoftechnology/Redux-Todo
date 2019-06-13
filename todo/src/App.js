import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  handleSubmitTodo = () => {
    let nextId = Date.now();
    var todo = {
      task: this.state.name,
      id: nextId,
      completed: false
    };

    if (this.state.name === '') {
      return
    } else {
      this.props.addTodo(todo);
      this.setState({name: ''});
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo List</h1>
        </header>
      <TodoList />
      </div>
    );
  }
}

export default App;
