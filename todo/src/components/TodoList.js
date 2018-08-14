import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions/todos';
import Todo from './Todo';


const TodoList = (props) => {
    return (
        <ul>
        {props.todos.map(todo => 
        <Todo
            key={todo.id}
            {...todo}
            toggle={() => props.toggleTodo(todo.id)}
            remove={() => props.removeTodo(todo.id)}
        />
        )}
        </ul>
    );
}

const mapStateToProps = state => {
    return {
        todos: state
    }
}

export default connect(mapStateToProps, {toggleTodo, removeTodo})(TodoList);