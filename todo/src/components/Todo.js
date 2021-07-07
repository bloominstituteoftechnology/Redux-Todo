// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Components
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

// Styles
import './Todo.css';

export default class Todo extends React.PureComponent {
	checkCompleted() {
		// if there is a task in this.props.todoList marked as completed, then
		// return true, else return false
		for (let task in this.props.todoList) {
			if (this.props.todoList[task].completed) return true;
		}

		return false;
	}

	removeAllCompleted() {
		this.props.removeAllCompleted();
	}

	render() {
		return(
			<div className = 'todo-div'>
				<div className = 'todo-list'>
					{ this.props.todoList.map((item, i) => 
						<TodoItem 
							item = { item } 
							index = { i } 
							key = { i } 
							deleteItem = { this.props.deleteItem } 
							toggleCompleted = { this.props.toggleCompleted }
						/>
					) }
				</div>

				<TodoForm 
					checkCompleted = { () => this.checkCompleted() } 
					removeAllCompleted = { () => this.removeAllCompleted() } 
					handleSubmit = { value => this.props.handleSubmit(value) }
				/>
			</div>
		);
	}
};

Todo.propTypes = {
	deleteItem: PropTypes.func,
	handleSubmit: PropTypes.func,
	removeAllCompleted: PropTypes.func,
	todoList: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string,
		completed: PropTypes.bool
	})),
	toggleCompleted: PropTypes.func
}
