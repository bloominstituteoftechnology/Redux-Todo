import React, { Component } from 'react';
import { connect } from 'react-redux';
class Todo extends Component {
  render() {
    return (
      <li
        style={props.todo.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => {
          props.toggleCompleted(props.todo.id);
        }}
        id={props.todo.id}
      >
        {props.todo.value}
      </li>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...props
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { value }
)(Todos);
