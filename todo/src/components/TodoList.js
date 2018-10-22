import React from 'react';

const TodoList = props =>{
    return(<div>
        {props.todos.map(todo => <h5 key={todo.value}>{todo.value}</h5>)}</div>
    )
}

export default TodoList