import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../actions/index.js';

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
                {this.state.todo}
                {this.props.todos.map(todo => {
                    return <ul key={todo.todoText}>{todo.todoText}</ul>
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

export default connect (mapStoreToProps, {addTodo}) (TodoList);