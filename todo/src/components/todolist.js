import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../App';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.setState({todos: this.state.todos});
  }

  render() {
    return (
      <div className="TODO_LIST">
        {this.state.todos.map(todo => (
          <ToDoDescription key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

function ToDoDescription({ todo }) {
  console.log(todo);
  const { toDoItem, completed } = todo;
  return (
      <div>
        <h2>{toDoItem}</h2>
        <input type="checkbox">{completed}</input>
      </div>
  );
}
