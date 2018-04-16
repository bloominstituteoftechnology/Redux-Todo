import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      newTodo: '',
      todos: ['Do homework', 'study']
      
    }
    
    
  }
  handleClick = () => {
    const { todos } = this.state;
    todos.push(this.state.newTodo);
    this.setState({ todos, newTodo: '' });

  }

  handleInput = (e) => {
    // e.targe.name = e.target.value;
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input name="newTodo" type='text' value={this.state.newTodo} onChange={this.handleInput} placeHolder="New List Item" ></input>
        <button onClick={this.handleClick}>ADD</button>
      </div>
    );
  }
}

export default App;
