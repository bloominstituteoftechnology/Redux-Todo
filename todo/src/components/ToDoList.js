import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import Todo from './Todo';


const ToDoList = (props) => {
    console.log(props);
    return (
        <div>
            
            {props.todos.map(todo => {
                return (
                <Todo key = {todo.id} value = {todo.value} completed = {todo.completed} onClick={toggleTodo}/>
                )
            })}

        </div>
    )
}

const mapStateToProps = state => {
    return { todos: state.todos}
}

export default connect (
    mapStateToProps, { toggleTodo })(ToDoList);