import React, { Component } from 'react';
import { connect } from "react-redux";
import todos from './reducers';
import TodoList from './components/TodoList';
import { removeCompletedToDo, addToDo, completed } from './actions';
import TodoForm from './components/TodoForm';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props),
    this.state = {
      newToDo: '',
      completedTodos: []
    }
  }

  itemAdd = (event) => {
    this.setState({newToDo: event.target.value})
  }

  addNewTodo = (event) => {
    event.preventDefault();
    this.props.addToDo(this.state.newToDo);
    this.setState({newToDo: ''})
  }

  completedTodoHandler = (todo) => {
    this.props.completed(todo);
    const completedTodoItems= this.state.completedTodos;
    for (let i=0; i<completedTodoItems.length; i++) {
      if (completedTodoItems.length === 0) {
        completedTodoItems.push(todo);
      }
      else if(completedTodoItems[i].id === todo.id) {
        completedTodoItems.splice(completedTodoItems[i], 1)
        break;
      }
      else {
        completedTodoItems.push(todo);
      }
    }
    this.setState({completedTodos: completedTodoItems})
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.props.todos} removecompleted={this.props.removeCompletedToDo} completed={this.completedTodoHandler} />
        <TodoForm itemAdd={this.itemAdd} value={this.state.newToDo} add={this.addNewTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps, { removeCompletedToDo, addToDo, completed })(App);
