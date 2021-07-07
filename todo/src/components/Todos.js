import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const Todos = props => {
  return <ul>
  {props.todos.map(todo => (
    <Todo key={todo.id} todo={todo} handleClick={props.handleClick}/>
  ))}
  </ul>

}

Todos.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    completed: PropTypes.bool,
    text: PropTypes.string
  })
}

export default Todos;
