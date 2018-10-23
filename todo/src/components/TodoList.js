import React from 'react';


function TodoList(props) {
    return (
       <div>
            {props.text.map(todo => {
                return <li>{todo.text}</li>
            })}
       </div>
    )
}

export default TodoList;