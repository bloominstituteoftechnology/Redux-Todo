import React from 'react';
import Todo from './Todo';

const TodoList = props => {
	return (
		<ul>
			{props.todos.map((todo, index) => (
				<Todo
					key={`${todo.value}${index}`}
					toggleCompleted={props.toggleCompleted}
					index={index}
					todo={todo} />
			))}
		</ul>
	);
}

export default TodoList;