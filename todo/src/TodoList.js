import React, { Component } from 'react';
import Todo from './Todo.js'
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.todos.map(todo =>
                    <Todo 
                        todo={todo}
                        key={todo}
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

export default connect(mapStateToProps)(TodoList);
