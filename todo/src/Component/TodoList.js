import React from 'react';
import { connect } from 'react-redux';
import { addTodoTask } from '../actions';

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			taskText: ''
		};
	}

	handleChanges = (e) => {
		this.setState({ taskText: e.target.value });
	};

	handleNewTask = (e) => {
		e.preventDefault();
		this.props.addTodoTask(this.state.taskText);
		this.setState({
			taskText: ''
		});
	};

	render() {
		return (
			<div>
				{this.props.tasks.map((task, index) => (
					<div key={index} complete={task.complete}>
						<h3 onClick={() => this.props.toggleComplete(index)}>{task.task}</h3>
					</div>
				))}
				<input
					type="text"
					name="taskInput"
					onChange={this.handleChanges}
					placeholder="What's todays focus..."
					value={this.state.taskText}
				/>
				<button onClick={this.handleNewTask}>Add Task</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks
	};
};

export default connect(mapStateToProps, { addTodoTask })(TodoList);
