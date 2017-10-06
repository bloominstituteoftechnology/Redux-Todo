import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import {connect} from 'react-redux';
import {addTodo} from "./actions/Todos";

class App extends Component {
  constructor (props) {
    super(props);
    this.props = props;
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
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.dispatch(addTodo({description: e.target.inputValue.value}));
          e.target.inputValue.value ='';
        }}>
          <input type="text" name="inputValue" placeholder="Enter new item"/>
          <button>Submit</button>
        </form>
        <TodoList/>
      </div>
    );
  }
}

export default connect()(App);
