import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleTodoComplete = todoIndex => {
        this.props.toggleComplete(todoIndex);
      };

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo) => (<li  key={todo.id} onClick={() => this.handleTodoComplete(todo.id)} style={{textDecoration: todo.complete ? "line-through" : "none"}} >{todo.text}</li>) )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { toggleComplete })(TodoList);