import React, { Fragment } from 'react';

function Todo(props) {
	return (
		<Fragment>
			{props.todos.map((todo) => {
				return (
					<li
						key={todo.id}
						onClick={() => props.toggleTodo(todo.id)}
						style={{
							listStyleType: 'lower-alpha',
							textDecoration: todo.completed ? 'line-through' : 'none',
						}}
					>
						{todo.text}
					</li>
				);
			})}
		</Fragment>
	);
}

export default Todo;
