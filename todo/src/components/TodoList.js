import React from 'react';
import {connect} from 'react-redux';

import {updateTodos, toggleComplete} from "../actions"
const TodoList = props => {
    
    
    return (
<div className="todo-list">
{props.todos.map((todo, index)=>{
    return (
    <div key={index} className="todo">
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
    {updateTodos, toggleComplete}
)(TodoList);