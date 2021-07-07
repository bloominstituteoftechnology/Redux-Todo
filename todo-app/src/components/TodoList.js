import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleCompleted } from '../actions'

import Todo from './Todo';

const TodoList = props => {
    console.log(props)
    return (
        <div>
            {props.todos.map((todo, index) => (<Todo toggleCompleted={props.toggleCompleted} key={index} todo={todo}/>))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, {toggleCompleted})(TodoList);