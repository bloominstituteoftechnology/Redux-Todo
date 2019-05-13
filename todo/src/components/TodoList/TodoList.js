import React, { Component } from "react";
import Todo from "../Todo/Todo";
import {connect} from 'react-redux';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map(todo => {
                return (
                <Todo
                todo={todo}
                key={todo.id}
                />)
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({todos: state.todos})
}

export default connect(mapStateToProps)(TodoList);