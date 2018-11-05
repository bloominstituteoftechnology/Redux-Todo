import React, { Component } from "react";
import {addTodo, deleteTodo, toggleTodo,updateTodo} from '../actions';
import Form from './Form'
import Todo from './Header';
import Header from "./Header";



class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
              <Header />
              <Form />
            </div>
        );
    }
}

export default Main;

