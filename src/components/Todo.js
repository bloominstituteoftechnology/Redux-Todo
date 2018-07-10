import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({ text, completed }) => (
  <div>
    <li className={`todo ${completed ? 'completed' : null}`}>
      {text}
    </li>
  </div>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
export default Todo;
