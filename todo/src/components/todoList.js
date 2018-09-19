import React, {Fragment} from 'react';

export default function TodoList(props){
    return(
        <Fragment>
            <input 
                type='text' 
                onChange={props.handleChange}
                value={props.inputText}/>
            <button onClick={props.addTodo}>Add Todo</button>
            <ul>
                {props.todoList.map((todo,index) =>{
                    return(
                        <li 
                            key={index}
                            onClick={props.toggleTodo}
                        >
                            {todo.value}
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    )
}