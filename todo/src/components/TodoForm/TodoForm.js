import React from "react";
import { connect } from "react-redux";

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
            text: "",
            taskName: '',
		};
	}

	handleChange = event => {
		event.preventDefault();
		this.setState({ [event.target.name]: [event.target.value] });
	};

	addNewTask = event => {
		event.preventDefault();
		this.props.addNewTask(this.state.text);
	};

	toggleCompleted = index => {
		this.props.toggleCompleted(index);
	};

	render() {
		return (
			<div className="todo-form-wrapper">
				<form onSubmit="addNewTask">
					<input
						type="text"
                        name="taskName"
                        placeholder="Add a new task"
                        value={this.state.taskName}
                        onChange={this.handleChange}
					/>
					<button type="submit" onClick={this.addNewTask}>
						Add Todo
					</button>
				</form>
			</div>
		);
	}
}

export default TodoForm;
