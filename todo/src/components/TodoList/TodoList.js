import React from "react";
import { addTask, toggleCompleted } from "../../actions";
import { connect } from "react-redux";

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			inputText: "",
			taskName: "",
		};
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	addToLocalStorage = () => {
		localStorage.setItem("tasks", ...this.props.tasks);
	};

	addTask = ev => {
		ev.preventDefault();
		console.log("value", this.state.taskName);
		if (this.state.taskName !== "") {
			console.log("Button clicked");
			this.props.addTask(this.state.taskName);
			this.setState({ taskName: "" });
			console.log(localStorage);
			this.addToLocalStorage();
		} else {
			this.setState({ taskName: "NO EMPTY TASKS" });
			setTimeout(() => this.setState({ taskName: "" }), 100);
		}
	};

	toggleCompleted = index => {
		this.props.toggleCompleted(index);
		document.querySelector('h4').style.color = "orange";
	};

	// removeCompletedTasks = index => {
	// 	if ()
	// }

	render() {
		return (
			<div className="todo-list-wrapper">
				{this.props.tasks.map((task, index) => (
					<h4
						onClick={() => this.toggleCompleted(index)}
						key={task.taskName}
					>
						{task.taskName}
					</h4>
				))}

				<input
					type="text"
					name="taskName"
					onChange={this.handleChange}
					placeholder="New Task"
					value={this.state.taskName}
				/>
				<button onClick={this.addTask}>Add Task</button>
			</div>
		);
	}
}

// I'll be honest, I just 100% copied the following code from the example, since I am still very fuzzy on how these work.

function mapStateToProps(state) {
	return {
		tasks: state.tasks,
	};
}

const withState = connect(
	mapStateToProps,
	{
		addTask,
		toggleCompleted,
	}
);

const EnhancedTodoList = withState(TodoList);

export default EnhancedTodoList;
