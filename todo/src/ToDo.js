import React, { Component } from 'react';

const ToDo = (props) => {
    return(
        <form action="#" onSubmit={props.submit}>
            <input name="inputText" type="text" placeholder="Todo" 
                onChange={props.change} value={props.val} 
                required
            />
            <button type="submit">Add ToDo</button>
        </form>
    );
}

export default ToDo;