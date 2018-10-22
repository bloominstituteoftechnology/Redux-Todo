import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import TodoList from './components/TodoList';
import Form from './components/Form'

class App extends Component {
  constructor(){
    super();
    this.state= {
      input:''
    }
  }
  changeHandler = e =>{
    e.preventDefault()
    this.setState({input: e.target.value})
  }

  
  render() {
    return (
      <div className="App">
      <h3>Todo List</h3>
      <Form input={this.state.input} changeHandler={this.changeHandler}></Form>
        <TodoList todos={this.props.todos}></TodoList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
