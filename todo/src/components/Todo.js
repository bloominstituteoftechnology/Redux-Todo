import React from 'react';

const Todo = props => {
    return(
    <div>
      <ul>
        <p><strong>Task📑: </strong>{props.todo.value}</p>
      </ul>
     
    </div>
    )
}

export default Todo;