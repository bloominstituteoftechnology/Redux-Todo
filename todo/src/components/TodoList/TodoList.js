import React, { Component } from "react";
import {connect} from '../node_modules/react-redux';
import Todo from "../Todo/Todo";
// import { increment, decrement } from '../actions';
import TodoForm from '../ToDoForm'

const TodoList = () => {
    return (
        <div>
            <h1>Oh god it's another todo app</h1>
            <TodoForm />
        </div>
    )
}

export default TodoList;