import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

function Todo(props) {
	return (
		<li
			className="Todo"
			style={props.completed ? { textDecoration: 'line-through' } : {}}
			onClick={() => props.toggleTodo(props.id)}
		>
			{props.value}
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
	{ toggleTodo }
)(Todo);
