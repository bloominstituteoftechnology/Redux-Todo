import React from 'react';


const Todo = props => {
    let completedItem = props.item.compled ? 'line-through' : none;
    return (
        <li styled={{ textDecoration : completedItem }}
            onClick={() => props.toggleTodo(props.item.id)} 
        >
            {props.item.text}
        </li>
    );
}

export default Todo;