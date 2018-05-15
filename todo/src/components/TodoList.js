import React from "react";
import { connect } from "react-redux";
import { addTodo, completeTodo, deleteTodo } from "../actions";

const TodoList = props => {

    return(
        <ul>
            {props.todos.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default TodoList;




