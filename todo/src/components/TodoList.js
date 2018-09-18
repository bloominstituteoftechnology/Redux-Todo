import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';

import Todo from './Todo';

class TodoList extends Component {
	state = { todoText: '' };

	changeHandler = event => {
		this.setState({
			todoText: event.target.value
		});
	};

	submitHandler = (event, todoText) => {
		event.preventDefault();
		this.props.addTodo(todoText);
		this.setState({
			todoText: ''
		});
	};

	render() {
		return (
			<div className="TodoList">
				<ul>
					{this.props.todos.map(todo => (
						<Todo
							key={Date.now()}
							id={Date.now()}
							value={todo.value}
							completed={todo.completed}
						/>
					))}
				</ul>
				<form
					className="todo-form"
					onSubmit={event => this.submitHandler(event, this.state.todoText)}
				>
					<input
						type="text"
						required
						value={this.state.todoText}
						onChange={this.changeHandler}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state
	};
};

export default connect(
	mapStateToProps,
	{ addTodo, toggleTodo }
)(TodoList);
