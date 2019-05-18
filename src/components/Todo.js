import React from 'react';

export default (props) => {
  const { value, completed, onClick } = props;
  const todoClass = 'todo-container ' + (completed ? 'completed' : 'not-completed');
  return (
    <div className="todo-container" onClick={onClick}>
      <li value={value}>
          {props.value}
        <div className={todoClass}>
          {completed ? 'done' : 'not done'}
        </div>
      </li>
    </div>
  )
}