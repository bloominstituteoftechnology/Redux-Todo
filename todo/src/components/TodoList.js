import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grabTodos, addTodo, removeTodos, toggleTodo } from '../actions'

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    };

    inputHandler = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    toggleHandler = todoId => {
        this.props.toggleTodo(todoId);
    }

    removeHandler = () => {
        this.props.removeTodos();
    }

    addHandler = (event) => {
        const { input } = this.state;
        
        const newTodo = {
            input,
            completed: false,
            id: this.props.todo ? this.props.todo.length + input : 0 + input
        }
        
        this.props.addTodo(newTodo);
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        name="input"
                        value={this.state.input}
                        onChange={this.inputHandler}
                    />
                    <button 
                        type="button"
                        onClick={this.addHandler}
                    >
                        Add
                    </button>
                </form>
                <ul>
                    {this.props.todos.map( todo => {
                        return (
                            <li
                                onClick={() => this.toggleHandler(todo.id)}
                                key={todo.id}
                                style={
                                    todo.completed ?
                                    { textDecoration: "line-through"} :
                                    null
                                }
                            >
                                {todo.input}
                            </li>
                        )
                    })}
                </ul>
                <button onClick={() => this.removeHandler()}>Clear</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {
    grabTodos,
    addTodo,
    removeTodos,
    toggleTodo
})(TodoList);