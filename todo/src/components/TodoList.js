import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToDo } from '../actions'
import { todoToggle } from '../actions'
import ToDo from './Todo.js'

const ToDoList = () => (
                <ul>
                    {props.todos.map(todo => 
                    <ToDo
                        key={todo.id}
                        {...todo}
                        onClick={() => props.todoToggle(todo.id)}
                        />
                    )}
                    </ul>
)


const mapStateToProps = (state) => {
    return {
        todos: state
    };
}


export default connect(mapStateToProps)(ToDoList)

