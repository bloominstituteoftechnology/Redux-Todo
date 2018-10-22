import React from 'react';

const Task = props => {
  const { task, id, completed } = props.task;
  return (
    <div id={id}>
      <i className="far fa-circle" /> {task}
    </div>
  );
};

export default Task;
