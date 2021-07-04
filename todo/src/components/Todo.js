import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodos } from '../actions';

class Todo extends React.Component {
    constructor() { 
        super();
        this.state = {
            todoText: ''
        };
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleNewTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todoText);
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="todoText"
                    onChange={this.handleChanges}
                    placeholder="New todo"
                    value={this.state.todoText}
                />
                <button onClick={this.handleNewTodo}>Add Todo</button>

                {this.props.todos.map((todo, index) => (
                    <div key={index}>
                        <h3 onClick={() => this.props.toggleTodos(index)}>
                            {todo.todo}
                        </h3>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo, toggleTodos })(Todo);
