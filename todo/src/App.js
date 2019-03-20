import React, { Component } from 'react';
import './App.css';
import todoList from './components/todoList';
import Todo from './components/Todo';


class App extends Component {
 constructor() {
   super()
   this.state = {
     todos: [
      {
        value: 'Clean House',
        completed: false
      },
      {
        value: 'Cook food',
        completed: false
      },
      {
        value: 'Wash dishes',
        completed: false
      },
      {
        value: 'Learn react',
        completed: false
      },
      {
        value: 'Walk the dog',
        completed: false
      },
      {
        value: 'Buy groceries',
        completed: false
      }
    ],
    todo: ''
  };
}

 render() {
    return (
      <div className="App">
        <Todo />
        <todoList /> 
      </div>
    );
  }
}

export default App;
