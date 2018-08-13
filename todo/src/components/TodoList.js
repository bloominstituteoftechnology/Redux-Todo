import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoList extends Component {

    renderTodos = () => {
        return this.props.todos.map((todo, i) => {
            return (
                <li
                    // onClick={() => this.props.toggleTodo(todo)}
                    key={i}>
                    {todo.text}
                </li>
            )
        })
    }

    render() {
        return (
        <div>
            {this.renderTodos()}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo
    };
};

const mapDispatchToProps = dispatch => {
    addTodoHandler: todo => dispatch(addTodo(todo))
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);