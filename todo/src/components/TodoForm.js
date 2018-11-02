import React from 'react';

const TodoForm = (props) => {
  return (
    <div className="todoForm">
      <input type='text' placeholder='...todo' onKeyUp={props.updateEntry} />
      <button onClick={() => {}}>Add ToDo</button>
    </div>
  );
};

export default TodoForm;