import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, completeTodo, removeTodo } from '../actions';


class TodoList extends Component {
    state = {
        todo: ''
    }

    handleNewTodo = (event) => {
        event.preventDefault();
        this.setState({todo: event.target.value});
    }

    addTodo = (event) => {
        event.preventDefault();
        let todoObj = { todoText: this.state.todo, completed: false }
        this.props.addTodo(todoObj);
        // console.log('enter was pressed', this.props)
        this.setState({todo: ''});
    }

    handleCompleteTodo = (event, index) => {
        event.preventDefault();
        this.props.completeTodo(index)
        console.log(this.props.todos);
    }

    handleRemoveTodo = (event, index) => {
        event.preventDefault();
        this.props.removeTodo(index)
    };

    render() {
        // console.log(this.props.todos);
        return (
            <div>
                <form>
                    <input 
                    type="text" 
                    placeholder="Add Todo"
                    value={this.state.todo}
                    onChange={this.handleNewTodo}
                    />
                    <button onClick={this.addTodo}>Submit</button>
                </form>
                {this.state.todo}
                {this.props.todos.map((item, index) => {
                    if (item.completed === true) {
                        return (
                        <div key={item.todoText}>
                            <li 
                            onClick={(event) => {
                                this.handleCompleteTodo(event, index)
                            }}
                            >
                            {item.todoText}
                            </li>
                            <button value={index} onClick={(event) => {
                                this.handleRemoveTodo(event, index)
                            }}>X</button>
                        </div> )
                    } else {
                        return (
                        <div key={item.todoText}>
                            <li
                                onClick={(event) => {
                                    this.handleCompleteTodo(event, index)
                                }}
                            >
                                {item.todoText}
                            </li>
                        </div> )
                    }
                })}
            </div>
        );
    }
}

const mapStoreToProps = store => {
    return {
        todos: store
    };
};

export default connect(mapStoreToProps, { addTodo, completeTodo, removeTodo })(TodoList);