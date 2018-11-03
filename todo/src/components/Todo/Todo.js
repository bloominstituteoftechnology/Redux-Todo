import React, { Component } from 'react';


const Todo = ({onClick, completed, text}) => {
    <li onClick={onClick} style ={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
    </li>
}




export default Todo;