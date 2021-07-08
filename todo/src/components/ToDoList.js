import React from 'react';
import Task from './Task';

const TodoList = (props) => {
  const tasks = props.tasks.map((task, i) => <Task task={task} key={i} index={i} />);
  return (
    <ul>
      { tasks }
    </ul>
  );
};

export default TodoList;