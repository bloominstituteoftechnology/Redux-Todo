import React from 'react' 

const Todo = ({ onClick, completed, title, id, onDelete }) => {
    return (
    <li 
        onClick={onClick}
        style={ {
            textDecoration: completed ? 'line-through' : 'none'
          }}>
          {title}
          <button id={id} onClick={onDelete}> Delete </button>
    </li>
        )
}

export default Todo