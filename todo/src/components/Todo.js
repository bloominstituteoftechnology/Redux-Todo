import React from 'react';

const Todo = (props) => {
  return (
    <li>
      {props.todo.value}
    </li>
  )
}

export default Todo;

// onClick = this.props.somefunction that invokes a completed action, which toggles the true to false in the todo
