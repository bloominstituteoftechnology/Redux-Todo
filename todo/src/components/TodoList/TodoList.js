import React, { Component } from "react";
import Todo from "../Todo/Todo";
import {connect} from 'react-redux';

const TodoList = (props) => {
    return (<div>
        {props.todos.map(todo =>
            <Todo
            todo={todo}
            key={todo.text}
            />

            )}
    </div>
    )
}

const mapStateToProps = (state) => {
    return {todos: state.todos};
}

export default connect(mapStateToProps)(TodoList);