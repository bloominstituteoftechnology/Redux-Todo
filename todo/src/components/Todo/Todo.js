import React, { Component } from 'react';


const Todo = ({onClick, completed, text}) => {
    <li onClick={onClick} style ={{textDecoration: completed ? 'line-through' : null}}>
        {text}
    </li>
}




export default Todo;