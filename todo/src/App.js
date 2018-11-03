import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'Work on some code'},
      {id: 2, content: 'Work out'},
      {id: 3, content: 'Cook dinner'},
      {id: 4, content: 'Catch up on TV shows'}
    ]
  }

  deleteTodo = (id) => {
   const todos = this.state.todos.filter(todo => {
     return todo.id !== id
   })
   this.setState({
     todos
   })
  }

  addTodo = (todo) => {
    todo.id =Math.random();
    let todos = [...this.state.todos, todo]; {/* Created a new array that takes in old array from state and add the new todo to the array */}
    this.setState ({
      todos
    })
  }
  
  render() {
    return (
      <div className="App container">
      <h1 className = "center blue-text">ToDo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} /> {/* Recieve items from state thats being passed down and passing DeleteTodo function*/}
      <AddTodo addTodo={this.addTodo}/> {/* Take in the addTodo function */}
      </div>
    );
  }
}

export default App;
