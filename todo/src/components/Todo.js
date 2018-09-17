// React
import React, { Fragment } from 'react';

// Styles
import './Todo.css';

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
				<ul>
					{ this.props.todoList.map((item, i) => 
						<div key = { `item-div-${ i }` }>
							<li 
								id = { i } 
								onClick = { e => this.props.toggleCompleted(e.target.id) } 
								key = { `item-li-${ i }` } 
								className = 'list-item' 
								style = { item.completed ? { textDecoration: 'line-through' } : {}}
							>{ item.value }</li>
							<span 
								key = { `item-span-${ i }` } 
								onClick = { () => this.props.deleteItem(i) }
							>X</span>
						</div>
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
