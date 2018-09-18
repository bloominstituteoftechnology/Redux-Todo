import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { addTodo } from "./actions"; 
import { connect } from 'react-redux'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTask: '',
    }
  }

   addInputValueHandler = (event) => {
    this.setState({
      newTask: event.target.value
    })
  }

   submitFormDataHandler = (event) => {
    const newTask = {
      id: new Date(),
      task: this.state.newTask, 
      completed: false
    }

     this.props.addTodo(newTask); 
     this.setState({
      newTask: '',
    })
   }

  render() {
    return (
      <div className="App">
        <TodoList />
        <TodoForm submitData = {this.submitFormDataHandler} value = {this.state.newTask} change = {this.addInputValueHandler}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

 export default connect(mapStateToProps, {addTodo })(App);