import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

class TodoList extends Component {

    handleDelete = (id) => {
        return this.props.deleteTodo(id);
    }
    render() {
        return (
        <div>
            {this.props.todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <div>
                            {todo.text}
                        </div>
                        <button onClick={() => this.handleDelete(todo.id)}> Delete </button>
                    </div>
                );
            })}
        </div>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, { deleteTodo })(TodoList)