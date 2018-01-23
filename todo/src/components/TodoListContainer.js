import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete } from '../actions';

import '../styles/TodoList.css';

class TodoList extends Component {
	constructor() {
		super();
		this.state = {
			text: '',
		};
	}

	handleTodoInput = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	addTodoHandler = e => {
		e.preventDefault();

		const { text } = this.state;
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
		this.props.toggleComplete(id);
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

										<li className="TodoItem">{todo.text}</li>
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
})(TodoList);
