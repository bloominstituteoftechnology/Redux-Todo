import React, { Component } from 'react'
import Todo from './Todo';

import { connect } from 'react-redux';

class TodoList extends Component {
    render() {
        return (
            <div>
                {this.props.todos.todos.map((todo, i) => (
                    <Todo todo={todo} key={i} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, {})(TodoList);
