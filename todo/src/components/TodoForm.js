import React from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../actions/addTodoAction";

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newTodo: ""
		};
	}

	handleNewTodo(event) {
		this.setState({ newTodo: event.target.value });
	}

	render() {
		// console.log(this.state);
		return (
			<div>
				<h1>form here</h1>
				<form>
					<input
						type="text"
						placeholder="Type your Todos Here"
						name="newTodo"
						value={this.state.newTodo}
						onChange={event => this.handleNewTodo(event)}
					/>
					<button
						type="button"
						onClick={() => {
							this.props.addTodoAction(this.state.newTodo);
						}}
					>
						Add Todo
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state
	};
};

export default connect(mapStateToProps, { addTodoAction })(TodoForm);
