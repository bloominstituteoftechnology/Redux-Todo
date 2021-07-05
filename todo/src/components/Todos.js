import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
class Todos extends Component {
  render() {
    return (
      <ul>
        {props.todos.map(todo => (
          <Todo
            value={todo.value}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
          />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps
  // { value }
)(Todos);
