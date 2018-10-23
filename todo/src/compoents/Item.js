import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }

    handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    handleNewTodo = ev => {
        ev.preventDefault();
        this.props.addTodo(this.state.todoText)
    }


    render() {
        return (
            <div>
                {this.props.todos.map((todo) => (
                    <h2>{todo.value}</h2>
                ))}
                <input
                type='text'
                name='todoText'
                onChange={this.handleChanges}
                placeholder='New Todo'
                value={this.state.todoText} 
                />
                <button onClick={this.handleNewTodo}>Add Todo</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    {addTodo}
)(Item)