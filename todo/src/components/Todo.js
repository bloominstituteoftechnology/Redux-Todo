import React from 'react';

import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

import './StyledComponents.css';

function Todo(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return (
          <li
            className="hvr-grow"
            key={todo.id}
            onClick={() => props.toggleCompleted(todo.id)}
            style={{
              textDecoration: props.toggleCompleted ? 'line-through' : 'none'
            }}
          >
            {todo.value}
            <button
              className="delete-button"
              onClick={() => props.deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { deleteTodo }
)(Todo);
