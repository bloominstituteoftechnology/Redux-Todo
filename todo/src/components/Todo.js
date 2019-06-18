import React from 'react';

const Todo = props => {

    const style ={
        textDecoration: 'line-through' 
    }
    return(
        <div>
            <h3 style={props.completed === true ? style : null} onClick={() => props.toggleTodo(props.id)}>{props.todo}</h3>
        </div>
    )
}

export default Todo; 