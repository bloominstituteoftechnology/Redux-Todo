import React from 'react';

export default (props) => {
    return (
        <li className={props.completed ? "list-item-done" : "list-item"} id={props.id} onClick={(e) => {props.handleOnClick(e)}}>
            {props.todo}
        </li>
    )
}


