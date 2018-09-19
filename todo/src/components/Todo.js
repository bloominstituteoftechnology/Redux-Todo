import React from 'react';
import './Todo.css';

const Todo = props => {
    return(
        <div>
            <li className="todoItem"
                // style={ props.todo.completed ? {color: '#d3d3d3', 
                //                                 textDecoration: 'line-through' }
                //                             : null
                //         }
                // onClick={(event) => props.handleTodoClick(event,props.id)}
                value={props.todo.value} 
            >   {props.todo.value} </li>
            {console.log(props.id)}
            <button className="delete-button" 
                    onClick={(event) => props.handleRemoveTodo(event, props.id)}>Delete</button>
        </div>
    );
}

export default Todo;