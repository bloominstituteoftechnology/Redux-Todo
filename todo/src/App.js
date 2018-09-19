import React, { Component } from "react";
import Todo from "./components/Todo";
import "./App.css";
import { ADD_ITEM } from "./actions/ADD_ITEM";
import { connect } from "react-redux";

class App extends Component {
	constructor() {
		super();
		this.state = {
			todo: [
				{
					value: "Walk The Dog",
					completed: false
				}
			],
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
						<button
							type="button"
							onClick={() => this.props.ADD_ITEM(this.state.textField)}
						>
							Add Todo Item
							{console.log(ADD_ITEM)}
						</button>
						<button>Clear Completed</button>
					</form>
				</div>
				<ul />
				{this.props.todo.map(todo => (
					<Todo
						todo={todo}
						value={todo.value}
						id={todo.id}
						completed={todo.completed}
					/>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	todo: state.todo
});

export default connect(
	mapStateToProps,
	{ ADD_ITEM }
)(App);
