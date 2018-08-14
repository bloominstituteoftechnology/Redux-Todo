import React from "react";
import Todo from "./Todo";
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../Actions/';

const Todos = props => (
	<ul>
		{props.todos.map(e => (
			<Todo key={e.id} item={ e } toggleTodo={props.onToggleTodo} />
        ))}
        <input type="text" placeholder="Add a todo!" onKeyDown={event => {if (event.key === "Enter") props.onAddTodo(event.target.value)}}/>
	</ul>
);

const mapDispatchToProps = dispatch => ({
    onAddTodo: text => dispatch(addTodo(text)),
    onToggleTodo: id => dispatch(toggleTodo(id))
})

const mapStateToProps = state =>({
    todos: state
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)

