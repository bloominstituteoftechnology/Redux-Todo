import React from 'react';

const Todo = props => {
  return (
    <div className="item-container">
      <div className="delete-item">
      <p onClick={props.deleteClick}>X</p>
      </div>
      <p className="todo-item" onClick={props.itemClick} style={props.style}>{props.text}</p>  
    </div>
    
  )
}

export default Todo;