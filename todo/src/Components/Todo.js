import React from 'react';
import { toggleCompleted } from '../Actions/';
import { connect } from 'react-redux';


const Todo = props => {
    const markAsCompleted = () =>{
        props.toggleCompleted(props.id);
    }
    return (
        <li 
            style={props.todo.completed ? { 
                textDecoration: 'line-through', 
                textDecorationColor: 'red' 
            } : null} 
            onClick={markAsCompleted}>{props.todo.value}
        </li>
    );
}


export default connect(null, {toggleCompleted})(Todo);
