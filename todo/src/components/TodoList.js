import React from 'react';

const TodoList = props => {
    console.log(props)
    return(

        <ul className='todo-style'>
        {props.todo.map(output=>{
         return   <li>{output}</li>
        })}</ul>

    )


}
export default TodoList