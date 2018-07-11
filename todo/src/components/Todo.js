import React from 'react';

import './Todo.css';

const Todo = props => {
    return (
      <div className="todo">
        <span
          id={props.todo.id}
          style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}}
          onClick={() => props.handleCompleted(props.todo.id)}>
          {props.todo.value}
        </span>
        {props.todo.completed ? <button onClick={() => props.handleClear(props.todo.id)}>X</button> : null}
      </div>
    );
  };
  
  export default Todo;