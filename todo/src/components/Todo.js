import React, { Fragment } from 'react';
import TodoItem from './TodoItem';

export default class Todo extends React.PureComponent {
	handleInputChange(e) {
		e.preventDefault();
		
		this.props.handleInputChange(e.target.value);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.handleSubmit(e.target[0].value);
	}

	render() {
		return(
			<Fragment>
				<div>
					TodoList: { this.props.todoList.map((item, i) => <TodoItem key = { i } item = { item } />) }
				</div>

				<form onSubmit = { e => this.handleSubmit(e) }>
					<input 
						value = { this.props.inputText } 
						onChange = { e => this.handleInputChange(e) }
					/>
					<button type = 'submit'>Add</button>
				</form>
			</Fragment>
		);
	}
};
