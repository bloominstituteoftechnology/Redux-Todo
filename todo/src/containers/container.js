import React, { Component } from "react";
import { connect } from 'react-redux';
import { ADDTODO, REMOVETODO, TOGGLETODO } from '../actions/todoActions';

class Todo extends Component {
    state = {
        todos: '',
        toggle: false
    }



updateTodo = (event) => {
    this.setState({todos: event.target.value});
}

addTodoInput = (event) => {
    event.preventDefault();
    this.props.ADDTODO({todos: '', toggle: false});
}

removeTodoInput = (event) => {
    this.props.REMOVETODO(event.target.getAttribute('id'));
}

toggleTodoInput = (event) => {
    this.props.TOGGLETODO(event.target.getAttribute('id'));
}

render() {
    return (
        <div className="Todo">
            <form onSubmit={this.addTodoInput}>
            <input
                onChange={this.updateTodo}
                placeholder="todo"
                value={this.state.todos}
            />
            <button value="addTodo" onClick={this.addTodoInput} type="submit">Add to todolist</button>
            </form>
            <ul>
                {this.props.todos.map((todo, index) => {
                    return(
                        <li onClick={this.toggleTodoInput()} key={index} id={index}>{todo.todos}</li>
                    )
                })}
            </ul>

        </div>
        );
    }
}