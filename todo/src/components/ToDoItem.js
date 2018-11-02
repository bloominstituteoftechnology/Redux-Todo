import React from 'react';
import { connect } from 'react-redux';
import {toggle} from '../actions/actions';

const ToDoItem = (props) => {
    console.log(props)
    return(
        <button onClick={props.onClick}
            style={{
                textDecoration: props.completed ? 'line-through' : 'none'
            }}
        >
            <h3>{props.value}</h3>
            <h4>The id is {props.id}</h4>
            {props.completed === false ? <h4>FALSE</h4> : <h3>True!</h3>}
        </button>
    )
}


export default connect(()=>({}), {toggle})(ToDoItem);