import React from 'react';
import Todo from './Todo';

export default function Todos(props) {
    return (
        <div>
            <ul>
                {props.todos.map((todo, index) => {
                    return (
                        <li><Todo key={index}/>{todo.todo}</li>
                    )
                })};
            </ul>
        </div>
    )
}