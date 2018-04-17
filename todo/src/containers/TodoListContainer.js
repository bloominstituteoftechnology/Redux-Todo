import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleComplete, importState } from '../actions/todoActions';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            completed: false,
        }
    }


    componentDidMount() {
        this.setState({ '': '' });
    }

    handleInput = (event) => {
        this.setState({ value: event.target.value });
    }

    addTodoHandler = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ value: '', completed: false });
    };

    removeHandler = (event) => {
        this.props.removeTodo(event.target.getAttribute('id'));
    }

    toggleHandler = (event) => {
        this.props.toggleComplete(event.target.getAttribute('id'));
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <form onSubmit={this.addTodoHandler}>
                <input id='input' onChange={this.handleInput} name='value' value={this.state.value}/>
                <input type='submit' value='Add Task' onClick={this.addTodoHandler} />
                </form>
                <ul className="List">
                    {this.props.todos.map((todo, i) => {
                        return (
                            <div className="List">
                                <li key={i}
                                    id={i}
                                    className={todo.completed ? 'todo-completed' : ''}
                                    onClick={this.toggleHandler}>
                                    {todo.value}
                                </li>
                                <button key={i}
                                    id={i}
                                    onClick={this.removeHandle}>X
                                </button>
                                </div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
}

export default connect(mapStateToProps, { addTodo, removeTodo, toggleComplete, importState })(Todo);