import React, { Component } from "react";
import Todo from "../Todo/Todo";
import Redux from 'react';
import {connect} from 'react-redux';


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