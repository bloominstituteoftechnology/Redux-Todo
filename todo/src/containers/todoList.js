import React from 'react';
import Todo from '../components/todo';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const TodoList = (props) => {
    console.log("State",props)

    return (
        <div>
            {props.todos.map(todo => (
                <Todo
                text = {todo.text}
                key={todo.id}
                completedTodo={ () => props.toggleTodo(todo.id)}
                todoStatus = {todo.completed}/>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({ todos : state.todos })


export default connect(mapStateToProps,{toggleTodo})(TodoList);