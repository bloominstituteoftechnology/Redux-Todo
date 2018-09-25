import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { addTodo, toggleTodo } from '../actions';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
		};
	}

	onChange = (event) => {
		this.setState({ input: event.target.value });
	};

	render() {
		return (
			<div>
				<h1>Todo App</h1>
				<form>
					<input
						placeholder="Enter Todo Here"
						value={this.state.input}
						onChange={this.onChange}
					/>
					<button
						type="submit"
						onClick={(event) => {
							event.preventDefault();
							this.props.addTodo(this.state.input);
							this.setState({ input: '' });
						}}
					>
						ADD TODO
					</button>
				</form>
				<ul>
					<Todo todos={this.props.todos} toggleTodo={this.props.toggleTodo} />
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	todos: state.todos,
});

export default connect(
	mapStateToProps,
	{ addTodo, toggleTodo }
)(TodoForm);
