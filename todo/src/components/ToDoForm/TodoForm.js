import React, { Component } from "react";
import Todo from "../Todo/Todo";
import Redux from 'react';
import {connect} from 'react-redux';
import { addText } from '../../actions'
import TodoList from "../TodoList/TodoList";

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            inputValue: ''
        }
    }

    inputHandler = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    addHandler = (e) => {
        e.preventDefault();
        this.props.addText(this.state.inputValue);
    }

    render(){
    return (
        <div>
            <input placeholder="enter todo" value={this.state.inputValue} onChange={this.inputHandler}/>
            <button onClick={this.addHandler}>Add Todo</button>
            <button>Clear Todo</button>
        </div>
    )
}
}

export default connect( () => ({}), {addText} )(TodoForm);
