import React from "react";
import "./TodoItem.css";

const TodoItem = props => {
	return (
		<div className = "todo-item">
			<div
				className={
					props.todo.completed ? "completed todo-list" : "todo-list"
				}
				onClick={() => props.toggleCompleted(props.todo.id)}
				// id={props.todo.display ? null : 'display-none'}
			>
				{props.todo.value}{" "}
			</div>
			<span
				className='red'
				onClick={() => props.removeTodo(props.todo.id)}>
				(x)
			</span>
		</div>
	);
};

export default TodoItem;
