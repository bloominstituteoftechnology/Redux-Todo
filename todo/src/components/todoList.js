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
                    {this.props.todos.map((todo, i) => (<li  key={todo.id} index={i} onClick={() => this.handleTodoComplete(todo.index)} style={{textDecoration: todo.complete ? "line-through" : "none"}} >{todo.text}</li>) )}
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