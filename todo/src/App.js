import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'
import {addTodo} from "./actions";
import TodoItemList from './components/TodoItemList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

    }

    handleTodoInput = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    addTodo = (evt) => {
        evt.preventDefault();

        this.props.addTodo({
            value: this.state.text,
            completed: false
        });
        console.log('Hello');

        // reset newTdo
        this.setState({newTodo: evt.target.value})
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <form >
              <input placeholder='Added Todo' name='newTodo' value={this.state.text} onChange={this.handleTodoInput}/>
              <button onClick={this.addTodo}>Add</button>
          </form>
          <TodoItemList/>
      </div>
    );
  }
}

export default App;
