import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { addTodo } from "./actions"; 
import { connect } from 'react-redux'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    }
  }

  addInputValueHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  submitFormDataHandler = (event) => {
    const newTask = {
      id: new Date(),
      task: this.state.inputValue, 
      completed: false
    }

    this.props.addTodo(newTask); 

    this.setState({
      inputValue: '',
    })

  }

  render() {

    return (
      <div className="App">
        <TodoList />
        <TodoForm submitData = {this.submitFormDataHandler} value = {this.state.inputValue} change = {this.addInputValueHandler}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo})(App);
