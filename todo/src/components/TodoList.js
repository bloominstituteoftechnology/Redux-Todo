import React from 'react';
import store from "../index.js"
import {remove} from "../actions/index.js"
const TodoList = props => {
    return(

        <ul className='todo-style' >
        {props.todo.map(output=>{
         return   <li key={output} onClick={() => store.dispatct(remove(output))}>{output}</li>
        })}</ul>

    )


}
export default TodoList