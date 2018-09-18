import React from 'react';
import Task from './Task';

export default (props) => {
  const tasks = props.tasks.map((task, i) => <Task task={task} key={i} index={i} />);
  return (
    <ul>
      { tasks }
    </ul>
  );
};