import React from 'react';
import { todoInput, addTodo, clearCompleted } from '../../actions/index';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
    handleInput = event => {
        this.props.todoInput(event.target.value);
    }

    addButton = () => {
        if (this.props.list === '') {
            return;
        }
        const todoList = { value: this.props.list, completed: false, id: Math.random() }
        this.props.addTodo(todoList);
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <input type='text' placeholder='...todo' name="item" value={this.props.list} onChange={this.handleInput} />
                <button onClick={this.addButton} >Add Task</button>
                <button onClick={() => this.props.clearCompleted()} >Clear Completed</button>
            </form >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        list: state.list
    };
};

export default connect(mapStateToProps, { todoInput, addTodo, clearCompleted })(TodoForm);
