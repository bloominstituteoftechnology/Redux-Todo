import React from 'react';

export default function Todos(props) {

    return (

        <ul>
            {props.todos.map((todo, i) => {
                <li><Todo key={i} todo={todo}/></li>
            })};
        </ul>
    )
}