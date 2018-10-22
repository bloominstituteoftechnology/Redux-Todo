import React from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from '../actions';

import TodoForm from './ToDoForm';

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			task: '',
			todo: {
				name: 'task',
				id: Date.now(),
				task: '',
				complete: false
			}
		};
	}

	handleChanges = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleClick = (e) => {
		e.preventDefault();
		// this.props.addTodoItem(this.state.todo.task);
	};

	render() {
		return (
			<div>
				<p>imagine I wrote something here please</p>
				<form action="submit">
					<input
						onChange={this.handleChanges}
						placeholder="What's todays focus?"
						value={this.state.task}
						name={this.state.todo.name}
					/>
				</form>
				<button onClick={this.handleClick}>Add Task</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		item: state.item
	};
};

export default connect(mapStateToProps, { addTodoItem })(TodoList);
