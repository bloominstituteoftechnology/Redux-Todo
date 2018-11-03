import React from 'react';

export const Todo = ({ id, task, completed, toggleComplete }) =>{
	return (
		<div className={completed ? "completed" : null} onClick={() => toggleComplete(id)}> {task}
		</div>
	);
};