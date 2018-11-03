import React, { Component } from 'react';

import '../App.css';

const ToDoForm = props => {
	return (
	<form>
			<div>
				<input
					name="todoText"
					className="inputField"
					value={props.todoText}
					type="text"
					onChange={props.handleInputChange}
					placeholder="Add todo"
				/>
				<button className="inputButton" onClick={props.addToDo}>Add Todo</button>
				<button className="clearButton" onClick={props.clearComplete}>Clear Completed</button>

			</div>

	</form>	

		

	
	);
};
export default ToDoForm;


