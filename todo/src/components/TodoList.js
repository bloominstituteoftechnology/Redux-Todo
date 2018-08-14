import React from 'react';
import Todo from './Todo.js';

export const TodoList = (props) => {

    return (
        props.todos.map((todo)=>{
            return <Todo todo={todo}/>
        })
    )
}