import React from "react";
import "./TodoItem.css";

const TodoItem = props => {
	return (
		<div className = "todo-item">
			<button
				className='red'
				onClick={() => props.removeTodo(props.todo.id)}>
				(x)
			</button>
            <div
				className={
					props.todo.completed ? "completed todo-list" : "todo-list"
				}
				onClick={() => props.toggleCompleted(props.todo.id)}
				// id={props.todo.display ? null : 'display-none'}
			>
				{props.todo.value}{" "}
			</div>
			
		</div>
	);
};

export default TodoItem;
