import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({
  text, completed, onClick, onButton,
}) => (
    <li className={`todo ${completed ? 'completed' : null}`}>
      <button className="plain-text" type="button" onClick={onClick}>
        {text}
      </button>
      <button type="button" onClick={onButton}>
        Delete
      </button>
    </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onButton: PropTypes.func.isRequired,
};
export default Todo;
