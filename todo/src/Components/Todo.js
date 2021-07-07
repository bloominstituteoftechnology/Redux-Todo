import React from "react";

const Todo = props => {
	let completedTest = props.item.completed ? "line-through" : "none";
	return (
		<li
			style={{ textDecoration : completedTest }}
			onClick={() => props.toggleTodo(props.item.id)}
		>
			{props.item.text}
		</li>
	);
};

export default Todo;
