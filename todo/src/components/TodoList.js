import React from 'react';
import {connect} from 'react-redux';

import {updateTodos} from "../actions"
const TodoList = props => {
    
    console.log(props.todos)
    return (
<div className="todo-list">
{props.todos.map(todo=>{
    return (
    <div key={todo.value} className="todo">
    <h4>{todo.value}</h4>
<h5>{todo.completed ? "Complete" :"Incomplete"}</h5>
    </div>
)
    })}
</div>
    )
}

const mapStateToProps=state=>{
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    {updateTodos}
)(TodoList);