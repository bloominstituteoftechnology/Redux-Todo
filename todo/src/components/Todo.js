import React from 'react';

const Todo = props => {
    return (
      <div className="todo">
        <span
          id={props.todo.id}
          style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}}
          onClick={() => props.handleCompleted(props.todo.id)}>
          {props.todo.value}
        </span>
        {props.todo.completed ? <button onClick={() => props.handleClear(props.todo.id)}>Delete</button> : null}
      </div>
    );
  };
  
  export default Todo;