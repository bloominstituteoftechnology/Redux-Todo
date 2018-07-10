import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
const Todo = (props) => {
    return <li onClick = {() => {
        props.toggleCompletion(props.todo.id, props.todos);
        }} className={props.todo.completed === true ? 'line-through' : ''}>{props.todo.text}</li>
}
const mapStateToProps = state => {
    return {
       todos: state.todos
    }
}
export default connect(mapStateToProps)(Todo);