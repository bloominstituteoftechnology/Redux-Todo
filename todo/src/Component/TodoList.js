import React from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from '../actions';

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			inputText: ''
		};
	}

	handleChanges = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleClick = (e) => {
		e.preventDefault();
		this.props.addTodoItem(this.state.inputText);
	};

	render() {
		return (
			<div>
				<p>Imagine that I wrote something here</p>
				<input
					type="text"
					name="inputText"
					onChange={this.handleChanges}
					placeholder="What's todays focus?"
					value={this.state.inputText}
				/>
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
