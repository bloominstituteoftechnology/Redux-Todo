import React, { Component } from 'react';


// Built as class to hold onto state
class TodoForm extends Component {
	render() {
		return (
			<div>
				<input placeholder="Add Todo" />
				<button>Add Todo</button>
			</div>
		);
	}
} 

export default TodoForm;
