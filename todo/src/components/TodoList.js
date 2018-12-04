import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class TodoList extends Component {
    constructor() {
        super();
        this.state ={
            name: ''
        };
    }

    handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    };

    handleAddTodo = ev => {
        ev.preventDefault();
        console.log('Button clicked');
        this.props.addTodo(this.state.name);
      };

    render() {
        return (
            <div>

                <h1>Daren's Freaking Amazing ToDo List!</h1>
                
                <input
                    type="text"
                    name="name"
                    onChange={this.handleChanges}
                    placeholder="Add a todo"
                    value={this.state.name}
                    autoComplete="off"
                />
                <button onClick={this.handleAddTodo}>Add Todo</button>

                {this.props.todos.map((todo, index) => (
                    <h4>{todo.name}</h4>
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

export default connect(mapStateToProps, {addTodo})(TodoList);