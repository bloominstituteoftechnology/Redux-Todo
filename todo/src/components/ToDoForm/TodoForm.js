import React, { Component } from "react";
import {connect} from '../node_modules/react-redux';
import Todo from "../Todo/Todo";


const TodoForm = () => {
    return (
        <div>
            <input placeholder="enter todo" />
            <button>Add Todo</button>
            <button>Clear Todo</button>


        </div>
    )
}

export default TodoForm;