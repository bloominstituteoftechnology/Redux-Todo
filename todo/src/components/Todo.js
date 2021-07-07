import React from 'react';
import { toggleTodo } from '../actions';
import { connect } from 'react-redux';

const Todo = (props) => {
    return (
        <span><input type = 'checkbox' onChange = {() => props.toggleTodo(props.id)} defaultChecked = {props.completed}></input>{props.value}</span>

    );
};


const mapStateToProps = state => {
    return { todos: state.todos};
};

export default connect(mapStateToProps, {toggleTodo})(Todo);