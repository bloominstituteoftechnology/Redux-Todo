import React from 'react';

 const Todo = props => {
    return (
        <div className = {`todo ${props.id}`}>
            <p>{props.text}</p>
        </div>
    )
}

 export default Todo;