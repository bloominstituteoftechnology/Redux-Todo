import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete, editTodo } from '../actions';

import '../styles/TodoList.css';

class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			text: '',
			edit: '',
			isEditingId: -1,
		};
	}

	handleTodoInput = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	addTodoHandler = e => {
		e.preventDefault();

		const text = this.state.text;
		const newTodo = {
			text,
			completed: false,
		};
		this.props.addTodo(newTodo);

		this.setState({
			text: '',
		});
	};

	deleteTodoHandler = id => {
		this.props.deleteTodo(id);
	};

	toggleCompleteHandler = id => {
		this.setState({ isEditing: false });
		this.props.toggleComplete(id);
	};

	isEditing = todo => {
		this.setState({
			edit: todo.text,
			isEditingId: todo.id,
		});
	};

	editTodoHandler = todo => {
		const edit = this.state.edit;
		const editedTodo = {
			text: edit,
			completed: todo.completed,
			id: todo.id,
		};

		this.props.editTodo(editedTodo);

		this.setState({
			edit: '',
			isEditingId: -1,
		});
	};

	render() {
		return (
			<div className="TodoListContainer">
				<br />
				<div className="AddTodoSection">
					<form className="InputForm" onSubmit={this.addTodoHandler}>
						<input
							onChange={this.handleTodoInput}
							name="text"
							value={this.state.text}
						/>
					</form>

					<button
						className="AddTodoButton"
						type="button"
						onClick={this.addTodoHandler}
					>
						+
					</button>
				</div>

				<br />

				<div className="TodoList">
					{this.props.todos.map(todo => {
						return (
							<div key={todo.id} className="TodoContainer">
								<button
									className="DeleteButton"
									onClick={() => this.deleteTodoHandler(todo.id)}
								>
									&#x2717;
								</button>

								{todo.completed ? (
									<div className="TodoItemContainer">
										<button
											className="ToggleCompleteButton"
											onClick={() => this.toggleCompleteHandler(todo.id)}
											style={{ opacity: 0.2 }}
										>
											&#x2713;
										</button>

										<li
											className="TodoItem"
											style={{ textDecoration: 'line-through', opacity: 0.2 }}
										>
											{todo.text}
										</li>
									</div>
								) : (
									<div className="TodoItemContainer">
										<button
											className="ToggleCompleteButton"
											onClick={() => this.toggleCompleteHandler(todo.id)}
										>
											&#x2713;
										</button>

										{this.state.isEditingId === todo.id ? (
											<button
												className="EditTodoButton"
												onClick={() => this.editTodoHandler(todo)}
											>
												done
											</button>
										) : (
											<button
												className="EditTodoButton"
												onClick={() => this.isEditing(todo)}
											>
												edit
											</button>
										)}

										{this.state.isEditingId === todo.id ? (
											<input
												className="EditTodo"
												onChange={this.handleTodoInput}
												name="edit"
												value={this.state.edit}
												placeholder={todo.text}
											/>
										) : (
											<li className="TodoItem">{todo.text}</li>
										)}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos,
	};
};

export default connect(mapStateToProps, {
	addTodo,
	deleteTodo,
	toggleComplete,
	editTodo,
})(TodoList);
