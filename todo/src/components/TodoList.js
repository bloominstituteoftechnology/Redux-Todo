import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../css/TodoList.css';

const TodoList = ({ todos, onTodoClick }) => (
  <article>
    <h2 className='title'>A list of very important things!</h2>
    <h3 className='title'>All of which need doing:</h3>
    <ol>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo}
              onClick={() => onTodoClick(todo.id)} />
      ))}
    </ol>
  </article>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
