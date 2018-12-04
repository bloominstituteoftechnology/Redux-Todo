import React from 'react';

export default function Task(props) {
	return (
		<div className="todocard">
			<p className={props.completed === true ? 'strikethrough' : ''} onClick={() => props.toggleCompleted(props.id)}>
				{props.task}
			</p>
			<button onClick={() => props.deleteTask(props.id)}>Delete</button>
		</div>
	);
}
