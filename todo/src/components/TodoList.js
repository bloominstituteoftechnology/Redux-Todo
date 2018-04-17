import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { toggleTodoAction } from "../actions/toggleTodoAction";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				{this.props.todos.map((todo, index) => {
					return (
						<Todo
							todo={todo}
							key={index}
							index={index}
							toggle={this.props.toggleTodoAction}
						/>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, { toggleTodoAction })(TodoList);
