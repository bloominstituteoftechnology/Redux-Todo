import React, { Component } from 'react';
import Todo from './Todo.js'
import { connect } from 'react-redux'
import { toggleCompletedAction } from './actions'

class TodoList extends Component {
    clickHandler = (e, payload) => {
        e.preventDefault();
        this.props.toggleCompletedAction(payload);
    }

    render() {
        return (
            <div>
                {this.props.todos.map(todo =>
                    <Todo 
                        todo={todo}
                        key={Math.random()}
                        onClick={(e) => this.clickHandler(e, todo)}
                        id={todo.id}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, {toggleCompletedAction})(TodoList);
