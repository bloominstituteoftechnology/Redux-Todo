import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import { connect } from 'react-redux';
import { add, toggleCompleted, deleteTask, deleteAll } from '../actions';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<Form add={this.props.addTask} deleteAll={this.props.deleteAll} />
				<TodoList
					toggleCompleted={this.props.toggleCompleted}
					deleteTask={this.props.deleteTask}
					tasks={this.props.tasks}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tasks: state.tasks,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addTask: text => dispatch(add(text)),
		toggleCompleted: id => dispatch(toggleCompleted(id)),
		deleteTask: id => dispatch(deleteTask(id)),
		deleteAll: () => dispatch(deleteAll())
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todo);
