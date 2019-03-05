import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleCompleted } from '../actions';

class Todo extends React.Component {
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addTodo(event.target.todo.value);
	};

	render() {
		return (
			<div>
				<h1>Todo List</h1>
				{this.props.todos.map((todo) => {
					console.log(todo);
				})}
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<input type="text" name="todo" placeholder="Add Todo" />
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, {
	addTodo,
	toggleCompleted
})(Todo);
