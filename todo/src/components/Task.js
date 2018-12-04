import React, { Fragment } from 'react';

export default function Task(props) {
	return (
		<Fragment>
			<p className={props.completed === true ? 'strikethrough' : ''} onClick={() => props.toggleCompleted(props.id)}>
				{props.task}
			</p>
			<button onClick={() => props.deleteTask(props.id)}>Delete</button>
		</Fragment>
	);
}
