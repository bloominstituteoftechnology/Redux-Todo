import React from 'react';

const Complete = ({ onClick, item }) => (
    <li
    onClick ={onClick}
    style= {{
        textDecoration: 'line-through'
    }}
    >
    {item}
    </li>
)


export default Complete;