import React from 'react';

const TodoForm = (props) => {
	return (
		<form action="submit">
			<input
				type="text"
				name="task"
				onChange={props.handleChanges}
				placeholder="What's todays focus?"
				value={props.task}
			/>
		</form>
	);
};

export default TodoForm;
