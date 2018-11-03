import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/index';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <form>
                    <input />
                    <button onClick={this.props.addTodo}>Add Todo</button>
                </form>    
                {this.props.todos.map(funtcion => (
                    <TodoItem />
                ))}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleTodo })(TodoList);