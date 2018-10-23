import React from 'react';

import { connect } from 'react-redux';
import { toggleCompleted, deleteTodo } from '../actions';

import './StyledComponents.css';

function Todo(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return (
          <div>
            <li
              className="hvr-grow"
              key={todo.id}
              onClick={() => props.toggleCompleted(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : null
              }}
            >
              {todo.value}
            </li>
            <button
              className="delete-button"
              onClick={() => props.deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
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
  { toggleCompleted, deleteTodo }
)(Todo);
