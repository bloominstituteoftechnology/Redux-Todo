import React from 'react';

const TodoList = props => {
    return (
        <div>
            {console.log(props.t)}
            {props.todos.map((todo, index) => {
                <div key={todo.value + index}>
                    {console.log(todo.value)}
                    {`${todo.value}`}
                    {todo.value}
                </div>
            })}
        </div>
    )
}

export default TodoList;