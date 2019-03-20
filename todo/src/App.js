import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import todoList from './components/todoList';
import Todo from './components/Todo';


class App extends Component {
 constructor() {
   super()
   this.state = {
     todos: [
      {
        task: 'Clean House',
        id: 1,
        completed: false
      },
      {
        task: 'Cook food',
        id: 2,
        completed: false
      },
      {
        task: 'Wash dishes',
        id: 1,
        completed: false
      },
      {
        task: 'Learn react',
        id: 2,
        completed: false
      },
      {
        task: 'Walk the dog',
        id: 1,
        completed: false
      },
      {
        task: 'Buy groceries',
        id: 2,
        completed: false
      }
    ],
    todo: ''
  };
}
   

 addTodo(event) {
   event.preventDefault();
   const newTodo 
   this.setState({
     todos: ''
   })
 }




 render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
