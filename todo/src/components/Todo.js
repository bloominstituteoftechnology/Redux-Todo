import React from 'react'
 const Todo = props => {
    return (
        <div
        onClick={props.toggleTodo}
        style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
        >{props.value}</div>
    );
}
   export default Todo 