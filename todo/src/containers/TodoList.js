import React, { Component } from 'react';

export default class TodoList extends Component {

  render() {
    const tempTodos = [
      {value: 'To do 0', completed: false},
      {value: 'To do 1', completed: false},
      {value: 'To do 2', completed: false},
      {value: 'To do 3', completed: false}
    ];

    return (
      <ul className="todo-list">
        {tempTodos.map((todo, i) => <li key={`${Math.random()}-${i}`}>{todo.value}</li>)}
      </ul>
    );
  }
}