import React from 'react';
import { todoInput, addTodo } from '../../actions/index';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
    constructor() {
        super();
    }

    handleInput = event => {
        this.props.todoInput(event.target.value);
    }

    addButton = () => {
        const todoList = { value: this.props.list, completed: false, id: Math.random() }
        this.props.addTodo(todoList);
    }

    render() {
        return (
            <form onSubmit={event => event.preventDefault()}>
                <input type='text' placeholder='...todo' name="item" value={this.props.list} onChange={this.handleInput} />
                <button onClick={this.addButton} >Add Task</button>
                <button>Clear Completed</button>
            </form >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    };
};

export default connect(mapStateToProps, { todoInput, addTodo })(TodoForm);
