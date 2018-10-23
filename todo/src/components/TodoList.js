import React from 'react';
import {connect} from 'react-redux';

import {toggleComplete, deleteTodo} from "../actions"
const TodoList = props => {
    
    
    return (
<div className="todo-list">
{props.todos.map((todo, index)=>{
    return (
    <div key={index} className="todo">
    <div className="delete-button" onClick={()=>props.deleteTodo(index)}>X</div>
    <h4 
    className={todo.completed? "complete" : "incomplete"}
    onClick={()=>props.toggleComplete(index)}>{todo.value}</h4>
<h5 >{todo.completed ? "Complete!" :"Incomplete"}</h5>
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
    {toggleComplete, deleteTodo}
)(TodoList);