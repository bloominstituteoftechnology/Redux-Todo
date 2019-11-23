import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import { connect } from 'react-redux';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Work on some code', completed: false},
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
    return todo.id !== id })
    this.setState({
    todos
    })
    }

  addTodo = (todo) => {
    todo.id =Math.random();
    let todos = [...this.state.todos, todo];
    this.setState ({
    todos
    })
    }

    toggleComplete =(id)=> {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            return {
            id: todo.id, 
            content: todo.content,
            complete: !todo.complete
            };
          } else {
            return todo;
          }
        })
      })
      };


  render() {
    return (
   
      <div className="App container">
      <h1 className = "center blue-text">ToDo's</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} toggleComplete={this.toggleComplete}  /> {/* Recieve items from state thats being passed down and passing DeleteTodo function*/}
      <AddTodo addTodo={this.addTodo} /> {/* Take in the addTodo function */}
      </div>
    
    );
  }
}

export default App;
