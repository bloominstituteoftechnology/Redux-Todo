import React from 'react';
import Todo from './Todo';

export default function TodoList (props){
    return(
        props.todos.map((todo, index) => 
            <Todo key={index} todo={todo}/>
        )
    );
}
