// React
import React, { Fragment } from 'react';

// Dependencies
import PropTypes from 'prop-types';

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
		console.log('todo props', this.props)
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

Todo.propTypes = {
	deleteItem: PropTypes.func,
	handleInputChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	inputText: PropTypes.string,
	todoList: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string,
		completed: PropTypes.bool
	})),
	toggleCompleted: PropTypes.func
}
