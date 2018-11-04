import React from 'react';

const TodoItem = (props) => {
    return (
        <div className="todo-item">
            {props.todo.value}
        </div>
    )
}
  
export default TodoItem;