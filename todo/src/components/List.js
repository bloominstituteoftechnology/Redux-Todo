import React from 'react';

export default (props) => {
    return (
        <li className="list-item">
            <div className="list-div">
            <p 
                className={props.completed ? "list-item-name-done" : "list-item-name"}  
                id={props.id} 
                onClick={(e) => {props.handleOnClick(e)}}
                >
                {props.todo}
            </p>
            <button 
                className="remove-button" 
                id={props.id} 
                onClick={(e) => {props.handleClickX(e)}}
                >
                
            </button>
            </div>
        </li>
    )
}
