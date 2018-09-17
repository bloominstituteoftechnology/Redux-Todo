import React, { Fragment } from 'react';

export default class Todo extends React.PureComponent {
	handleInputChange(e) {
		e.preventDefault();
		
		this.props.handleInputChange(e.target.value);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.handleSubmit(e.target[0].value);
	}

	toggleCompleted(e) {
		this.props.toggleCompleted(e.target.id);
	}

	render() {
		return(
			<Fragment>
				<ul>
					{ this.props.todoList.map((item, i) => 
						<li 
							id = { i } 
							onClick = { e => this.toggleCompleted(e) } 
							key = { i }
							style = { item.completed ? { textDecoration: 'line-through' } : {}}
						>{ item.value }</li>
					) }
				</ul>

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
