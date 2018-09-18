// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import './Todo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, Button } from 'reactstrap';

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
			<div className = 'todo-div'>
				<div className = 'todo-list'>
					{ this.props.todoList.map((item, i) => 
						<div key = { `item-div-${ i }` }>
							<div 
								id = { i } 
								onClick = { e => this.props.toggleCompleted(e.target.id) } 
								key = { `item-task-${ i }` } 
								className = 'list-item' 
								style = { item.completed ? { textDecoration: 'line-through' } : {}}
							>{ item.value }</div>

							<Button 
								color = 'danger' 
								key = { `item-span-${ i }` } 
								onClick = { () => this.props.deleteItem(i) }
							>X</Button>
						</div>
					) }
				</div>

				<Form className = 'todo-form' onSubmit = { e => this.handleSubmit(e) }>
					<Input 
						value = { this.props.inputText } 
						onChange = { e => this.handleInputChange(e) }
					/>

					<Button color = 'primary' type = 'submit'>Add Task</Button>
				</Form>
			</div>
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
