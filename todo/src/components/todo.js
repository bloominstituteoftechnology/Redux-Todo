import React from 'react'
import Proptypes from 'prop-types'; 

const Todo = ({ onClick, completed, text }) => (
    <li
        onClick={onclick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'        
        }}
    > 
        {text}
    </li>    
)

export default Todo; 