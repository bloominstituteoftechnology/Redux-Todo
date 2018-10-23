import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import  { addTodo }  from './actions'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoText: ''
    };
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  addTodoList = (e) => {
    e.preventDefault();
    const { todoText } = this.state;
    const newTodo = { 
      text: todoText,
      completed: false,
      id: this.props.text.length + 1
     };
     this.props.addTodo(newTodo);
     this.setState({ todoText:""})
  }

  render() {
    return (
      <div className="App">
        <TodoForm 
          changeHandler={this.changeHandler} 
          todoText={this.state.todoText}
          addTodoList={this.addTodoList} />
        <TodoList text={this.props.text} addTodoList={this.addTodoList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state)
  return {
      text: state
  };
};

export default connect(mapStateToProps, { addTodo })(App);
