import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/index.js';

class TodoList extends Component {
    state = {
        todo: ''
    }

handleNewTodo = event => {
    event.preventDefault();
    this.setState({ todo: event.target.value });
}

addTodo = event => {
    event.preventDefault();
    let toDo = { todoText: this.state.todo, completed: false }
    this.props.addTodo(toDo);
    this.setState({ todo: '' })
}

completeTodo = todoId => {
    this.props.toggleTodo(todoId)
};

    render() {
        return (
            <div>
                <form>
                    <input
                    type='text'
                    placeholder='Add Todo'
                    value={this.state.todo}
                    onChange={this.handleNewTodo}
                    />
                    <button onClick={this.addTodo}>Add</button>
                </form>
                {this.props.todos.map(todo => {
                    return (
                    <ul 
                    onClick={() => this.completeTodo(todo.id)}
                    style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        cursor: "pointer"
                    }}
                    key={todo.id}>{todo.todoText}</ul>
                    )
                })}
            </div>
        )
    }
}

const mapStoreToProps = store => {
    return {
        todos: store
    };
}

export default connect (mapStoreToProps, { addTodo, toggleTodo }) (TodoList);