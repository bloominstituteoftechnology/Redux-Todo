import React from "react";
import { connect } from "react-redux";
import {toggleToDo, removeToDo} from '../actions/actions';

function Todos(props) {
    console.log(props)
    return(
        <div>
            <ul>

                {props.todos.map( todo => {
                    return(
                <li key={todo.value} 
                onClick={() => props.toggleToDo(todo.value)}
                className={todo.completed ? 'done' : 'notDone'}
                >
                    {todo.value}
                    
                    <img src="https://img.icons8.com/material/20/000000/close-window.png"
                    onClick={() => props.removeToDo(todo.value)}></img>
                </li>
                )})}

            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return { todos: state.todos, completed: state.completed }
}

export default connect(
    mapStateToProps,
    { toggleToDo, removeToDo } 
)(Todos)