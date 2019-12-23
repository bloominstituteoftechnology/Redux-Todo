import React, { Component } from 'react';
import Todo from './Todo.js'
import { connect } from 'react-redux'
import { toggleCompletedAction } from './actions'
import { deleteTodoAction } from './actions'

class TodoList extends Component {
    clickHandler = (e, payload) => {
        e.preventDefault();
        this.props.toggleCompletedAction(payload);
    }

    deleteClickHandler = (e, payload) => {
        e.preventDefault();
        this.props.deleteTodoAction(payload)
    }

    render() {
        return (
            <div>
                {this.props.todos.map(todo =>
                    <div>
                        <Todo 
                            todo={todo}
                            key={Math.random()}
                            onClick={(e) => this.clickHandler(e, todo)}
                        />
                        <button onClick={(e) => this.deleteClickHandler(e, todo)}>Delete to-do</button>
                    </div>
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

export default connect(mapStateToProps, {toggleCompletedAction, deleteTodoAction})(TodoList);
