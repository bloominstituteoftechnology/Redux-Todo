import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({ text, completed, onClick }) => (
  <div>
    <li className={`todo ${completed ? 'completed' : null}`}>
      <button type="button" onClick={onClick}>
        {text}
      </button>
    </li>
  </div>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Todo;
