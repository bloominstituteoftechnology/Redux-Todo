import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, complete, deleteTask } from './actions';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './index.css';


import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: [],
        }
    } //constructor end....
    
  changeHandler = (event) => {
      event.preventDefault();
      this.setState({ [event.target.name]  : event.target.value })
  }
  
  addTaskToList = (task) => {
     
      this.props.addTask(task);
     // this.setState({ todos : ""})
  };

  deleteCompletedTask = (index) => {
      this.props.deleteTask(index);
  }

  handleToggleComplete = (index) => {
    this.props.complete(index);
  }

  render() {
    console.log("App : ",this.props.todos);
    return (
      <div className = "App">
          <h1 className = "list-heading"> Update Todo List.. </h1>
             {/*this.props.todos.map((item, index) => {
                                                  return <div key = {index}>
                                                  <li> {item.task} </li>  </div>
                                                })*/}
          <TodoList
              handleToggleComplete = {this.handleToggleComplete}
              toDoList = {this.props.todos}
          />  
        
         <TodoForm
              value = {this.todos}
              handleTodoChange = {this.changeHandler}
              addTodo = {this.addTaskToList}
              clearTodos = {this.deleteCompletedTask}
          /> 
          
      </div>
    );
  }
}// App Component end .....

const mapStateToProps = state => {
  return {
    todos : state,
  };
};


export default connect(mapStateToProps, { addTask, complete, deleteTask }) (App);
