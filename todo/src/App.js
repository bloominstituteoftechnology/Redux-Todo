import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './Components/ToDoList';
import {connect} from 'react-redux';
import {addTodo} from './Actions/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputText: ''
    };
  };

  inputHandler = e => {
    this.setState({inputText: e.target.value});
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputText);
  };
  

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Emily's To Do List:</h1>
        </header>
        
        <TodoList  
        list={this.state.list}
        inputText={this.state.inputText}
        inputHandler = {this.inputHandler}
        addTodo={this.addTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list, 
}); 

export default connect(mapStateToProps, {addTodo})(App);
