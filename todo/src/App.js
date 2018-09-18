import React, { Component } from "react";
import Todo from "./components/Todo";
import "./App.css";
import { ADD_ITEM } from "./actions/ADD_ITEM";
import { connect } from "react-redux";

class App extends Component {
	constructor() {
		super();
		this.state = {
			todo: [],
			textField: ""
		};
	}

	addTodo = event => {
		event.preventDefault();
		if (this.state.textField) {
			this.setState({
				todo: [
					...this.state.todo,
					{ value: this.state.textField, completed: false }
				],
				textField: ""
			});
		}
	};

	handleNewItem = event => {
		event.preventDefault();
		this.setState({
			textField: event.target.value
		});
	};

	render() {
		return (
			<div className="App">
				<div>
					<form>
						<input value={this.state.textField} onChange={this.handleNewItem} />
						<button onClick={() => this.state.todo.ADD_ITEM()}>
							Add Todo Item
						</button>
						<button>Clearn Completed</button>
					</form>
				</div>
				<ul />
				{this.state.todo.map(todo => (
					<Todo todo={todo} value={todo.value} completed={todo.completed} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	value: state.todo
});

export default connect(
	mapStateToProps,
	{ ADD_ITEM }
)(App);
