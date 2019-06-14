import React from 'react';
import { connect } from 'react-redux';
import {toggleCompleted } from '../actions'

const TodoItem = (props) => {
    return (
        <div>
          {props.todo.todo} <button id= {props.id} onClick={()=> props.toggleCompleted(props.id)}>done</button>
        </div>
    );
};

export default connect(null, {toggleCompleted} )(TodoItem);