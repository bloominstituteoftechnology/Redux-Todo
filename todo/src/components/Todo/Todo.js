import React from "react";
import { addTask } from '../../actions';

class Todo extends React.Component {
	render() {
		return (
			<div className="todo-item-wrapper">
				<p>This is a todo item</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		taskName: state.taskName,
		tasks: state.tasks,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addTask: text => dispatch(addTask(text)),
	};
}

export default Todo;
