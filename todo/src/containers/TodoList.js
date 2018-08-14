import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const TodoList = ({ todos, toggleTodo }) => (
    <ul>
        {todos.map(todo =>
            <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
            />
        )}
    </ul>
)

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)