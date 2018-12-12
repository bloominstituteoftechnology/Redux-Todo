import React from 'react';
import addTodo from './../actions/index'
import { connect } from 'react-redux';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

    changeHandler = ev => {
        this.setState({ [ev.target.todo]: ev.target.value });
    }

    handleAddTodo = ev => {
        ev.preventDefault();
        this.props.addTodo(this.state.todo)
    }

    render() {
        return (
            <div>
                <input
                type='text'
                name='name'
                onChange={this.changeHandler}
                placeholder='New Todo'
                value={this.state.todo}
                autoComplete='off'
                />
                <button onClick={this.handleAddTodo}>Add Todo</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

const withState = connect(
    mapStateToProps,
    {
        addTodo
    }
)

const EnchancedTodo = withState(Todo);

export default EnchancedTodo;