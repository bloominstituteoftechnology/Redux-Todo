import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { add_todo } from './actions/actions';
import { AddTodo, ToDoS } from './components';

export class App extends Component {


  render() {
    let handleInput;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jeffrey's Todo List</h1>
        </header>
        <AddTodo />
        {this.props.todos.map(todo => (<ToDoS todo={todo} key={todo.id} />))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {todos: state}
};

export default connect(mapStateToProps, {  })(App);