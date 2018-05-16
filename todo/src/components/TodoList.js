import React, { Component } from 'react';
import { connect } from 'react-redux';
import {toggleTodo } from './actions';

const TodoList = props => {
    console.log("container state", props.todos)
    return (
        <div>
            <ul>
                {props.todos.map((todo) => {
                        return (
                            <div
                                style={todo.completed ? {textDecoration : 'line-through'} : null }
                                 onClick={() => props.toggleTodo(todo.id)}
                                key={todo.id}
                            >
                                {todo.text}
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("State from TodoList", state)
    return { todos: state }
}

export default connect(mapStateToProps, { toggleTodo })(TodoList);

