import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.todos.map((todo, index) => {
					return <Todo todo={todo} key={index} />;
				})}
			</div>
		);
	}
}
