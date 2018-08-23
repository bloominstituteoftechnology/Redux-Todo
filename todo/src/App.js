import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux';
import TodoList from './Components/TodoList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      newTodo: "",

    }
  }
  
  // updateInputValue = event => {
    
    
  // }

  submitNewTask = event => {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      compelet: false,
    });
    this.setState({
      newTodo: ''
    });
  }

  newTodoChange = (event) =>{
    this.setState({
      newTodo: event.target.value
    });
  }


  
  
  render() {
    return (
      <div className="App">
        <form onSubmit="newTodoAdder">
            <label>Enter New Todo Here</label>
            <input
              onchange={this.newTodoChange}
              placeholder="New Todo"
              value={this.state.newTodo}/>

        </form>
        <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return(
    <div>connection</div>
    // todos: state.todos
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
