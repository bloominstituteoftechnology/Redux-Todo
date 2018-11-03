import React from 'react';

import { Todo } from "./Todo";

export const TodoList = ({ todos, toggleComplete }) => {
	return (
		<div>
			{todos.map(each => {
				return (
					<Todo 
						key={each.id}
						id={each.id}
						completed={each.completed}
						task={each.task}
						toggleComplete={toggleComplete}
					/>
				);
			})}
		</div>
	);
};