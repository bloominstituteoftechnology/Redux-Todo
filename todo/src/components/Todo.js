import React from 'react';

const Todo = props => {
    return (
      <div className="todo">
        <span>
          {props.todo.value}
        </span>
      </div>
    );
  };
  
  export default Todo;