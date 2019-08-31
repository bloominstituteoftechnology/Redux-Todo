import React from 'react';
import {} from '../actions/actions';
import ToDo from './ToDo';
import { connect } from 'react-redux'
const ToDoList =(props) => {
    return(
        <div>{props.todo.map(item => <ToDo />)} </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,{})(ToDoList)