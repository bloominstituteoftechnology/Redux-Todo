import React from 'react';

export default (props) => {
    return (
        <li id={props.id}>
            {props.todo}
        </li>
    )
}