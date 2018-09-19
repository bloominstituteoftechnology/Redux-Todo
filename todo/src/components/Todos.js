import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';


const style = { textDecoration: 'line-through' };
const Todos = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li
          key={todo.id}
          style={todo.completed ? style : null}
          onClick={() => props.completeTodo(todo.id)}
        >
          {todo.value}
        </li>

      ))}
    </ul>
  );
};

export default connect(
  null,
  { completeTodo }
)(Todos);
