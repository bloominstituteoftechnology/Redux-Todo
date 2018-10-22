import React from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from '../actions';

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [
				{
					task: 'Organize Garage',
					id: 1528817077286,
					done: true
				},
				{
					task: 'Bake Cookies',
					id: 1528817084358,
					done: false
				}
			],
			inputText: '',
			newTask: '',
			value: ''
		};
	}

	handleChanges = (e) => {
		this.setState({ newTask: e.target.value });
	};

	handleClick = (e) => {
		e.preventDefault();
		this.props.addTodoItem(this.state.todo.task);
	};

	render() {
		return (
			<div>
				<p>imagine I wrote something here please</p>
				<form action="submit">
					<input
						type="text"
						onChange={this.handleChanges}
						placeholder="What's todays focus?"
						value={this.state.newTask}
						inputText={this.state.inputText}
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
