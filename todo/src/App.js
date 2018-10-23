import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, complete, deleteTask } from './actions';
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
      this.setState({ todos : ""})
  };

  deleteCompletedTask = (index) => {
      this.props.deleteTask(index);
  }

  render() {
    console.log("App : ",this.props);
    return (
      <div className="App">
          <h1>Todo List </h1>
          {this.props.todos.map((item, index) => {
                                                  return <div key = {index}>
                                                  <li> {item.todos} </li> } </div>)}

	                 
          {/*<TodoList
              handleToggleComplete = {this.toggleTodoComplete}
              toDoList = {this.state.toDoList}
          />
        
         <TodoForm
              value = {this.state.todo}
              handleTodoChange = {this.changeTodo}
              addTodo = {this.addTaskTodoList}
              clearTodos = {this.clearCompletedTodos}
          /> */}  
          
      </div>
    );
  }
}// App Component end .....

const mapStateToProps = state => {
  return {
    todos : state,
  };
};


export default connect(mapStateToProps, { addTask, complete, deleteTask})(App);
