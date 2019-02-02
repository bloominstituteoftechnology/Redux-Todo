import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos:[]
    };
  }

  submitFn = text => {
    if(text !== ""){
      const newTodo = {
        task: text,
        id: Date.now(),
        completed: false
      };
      
      this.setState(prevsState => {
        let task = prevsState.todos.slice();
        task.push(newTodo);
        
        return{
          todos: task
        }
      })
    }
  };

  toggleTodo = id => {
    let task = this.state.todos.map(todo => {
      if(id === todo.id ){
        todo.completed = !todo.completed
        return todo
      }
      else{
        return todo
      }
    })
    this.setState({
      todos: task
    })
  }

  clearHandler = event => {
    if(!this.state.todos.completed){
      let newArray = this.state.todos.filter(props => {
        return props.completed !== true
      })

      this.setState({
        todos: newArray
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <TodoList  />
        <TodoForm />
      </div>
    );
  } 
}

export default App;
// toggleTodo = {this.toggleTodo}