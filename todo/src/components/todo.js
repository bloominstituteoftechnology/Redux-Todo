import React from 'react';
const Todo = (props) => {
    console.log("Props:",props)
    const style = { textDecoration: 'line-through' }
    return (
        <div>
            <li style = {props.todoStatus ? style : null}onClick={props.completedTodo}>{props.text}</li>
        </div>
    );
};

export default Todo;