import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import todoList from './components/todoList';


import './App.css';

class App extends Component {
 constructor() {
   super()
   this.state = {
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
