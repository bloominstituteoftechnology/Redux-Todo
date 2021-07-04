import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, completeTask, removeCompleted, deleteTodo } from '../actions';

class TodoList extends Component {
    constructor() {
        super();
        this.state ={
            value: ''
        };
    }

    componentDidMount() {

    }

    handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    };

    handleAddTodo = ev => {
        ev.preventDefault();
        console.log('Button clicked');
        this.props.addTodo(this.state.value);
      };

    handleCompleteClick = index => {
        console.log('Item was clicked');
        this.props.completeTask(index);
    }

    handleDeleteTodo = (index) => {
        // event.stopPropagation();
        console.log(index);
        this.props.deleteTodo(index);
      };

    render() {
        return (
            <div>

                <h1>Daren's Freaking Amazing ToDo List!</h1>
                
                <input
                    type="text"
                    name="value"
                    onChange={this.handleChanges}
                    placeholder="Add a todo"
                    value={this.state.value}
                    autoComplete="off"
                />
                <button onClick={this.handleAddTodo}>Add Todo</button>

                <button onClick={this.props.removeCompleted}>Remove Completed Todos</button>

                {this.props.todos.map((todo, index) => (
                    <div onClick={() => this.handleCompleteClick(index)} key={index}>
                        {todo.value}
                        <div>
                            <button onClick={() => this.handleDeleteTodo(index)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, {addTodo, completeTask, removeCompleted, deleteTodo})(TodoList);