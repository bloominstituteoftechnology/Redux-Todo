import React from 'react';
import './Todo.css'


const List = (props) => {
    
return (
    <div>
        {props.list.map(todo => <p className={todo.complete ? "done" : null} onClick={()=> props.complete(todo.id)} >{todo.task}</p>)}
    </div>
    )
    
  }

 

  export default List;