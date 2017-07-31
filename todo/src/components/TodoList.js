import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../css/TodoList.css';

const TodoList = ({ todos, onTodoClick }) => (
  <article>
    <h2 className='title'>A list of <a href="https://youtu.be/6PQ6335puOc?t=27s">very important things</a>!</h2>
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
  onTodoClick: PropTypes.func.isRequired // <-- how to make this happy with default list?
};

export default TodoList;
