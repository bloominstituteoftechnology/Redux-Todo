import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import '../App.css';

function Todo(props) {
	return (
		<li className="Todo">
			<div
				className="todo-text"
				style={props.completed ? { textDecoration: 'line-through' } : {}}
				onClick={() => props.toggleTodo(props.id)}
			>
				{props.value}
			</div>
			<button onClick={() => props.deleteTodo(props.id)}>Delete</button>
		</li>
	);
}

const mapStateToProps = state => {
	return {
		todos: state
	};
};

export default connect(
	mapStateToProps,
	{ toggleTodo, deleteTodo }
)(Todo);
