import React, { Component } from 'react';

export default class TodoForm extends Component {
  render() {
    return (
      <form className="todo-form">
        <input className="todo-form__input" type="text" placeholder="Enter your to-do" />
        <button type="submit" onClick={(e) => {
          e.preventDefault();
        }}>Submit</button>
      </form>
    );
  }
}