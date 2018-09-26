import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

class TodoContainer extends React.Component {
    state: {}

    render() {
        return <TodoList todoList={this.props.todos} />
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, {} )(TodoContainer); // "currrying"