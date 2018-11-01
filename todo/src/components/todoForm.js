import React, { Component } from 'react';
import ToDo from "./ToDo"
import '../App.css';

class TodoForm extends Component {
  render() {
    return (
      <div className="todo-form">
       <ToDo />
      </div>
    );
  }
}

export default TodoForm;