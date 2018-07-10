import React from 'react';

const Todo = props => {
    return (
      <div className="todo">
        <span id={props.todo.value} style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}} onClick={() => props.handleCompleted(props.todo.value)}>
          {props.todo.value}
        </span>
      </div>
    );
  };
  
  export default Todo;