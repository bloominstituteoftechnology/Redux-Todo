import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { deleteTodo } from '../actions';


const TodoList = (props) => {
    return (
        <div className="todo-container">
            {props.todos.map((todo) => {
                return (
                    <li
                        onClick={() => props.toggleTodo(todo.id)}
                        key={todo.id}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
                        >
                        {todo.text}
                        <button onClick={() => props.deleteTodo(todo.id) }>X</button>
                    </li>
                )
            })}
        </div>
    )
}

export default connect(null, { toggleTodo, deleteTodo })(TodoList);