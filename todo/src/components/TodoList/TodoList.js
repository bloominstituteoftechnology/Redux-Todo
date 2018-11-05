import React, { Component } from "react";
import Todo from "../Todo/Todo";
// import { increment, decrement } from '../actions';
import TodoForm from '../ToDoForm/TodoForm'
import {connect} from 'react-redux';

const TodoList = (props) => {
    {props.todos.map(todo =>
        <Todo
        id={todo.id}
        todo={todo}
        />
        )}
}

const mapStateToProps = (state) => {
    return {todos: state.todos};
} 



export default connect(mapStateToProps)(TodoList);