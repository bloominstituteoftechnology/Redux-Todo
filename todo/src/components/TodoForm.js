// React
import React from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import './TodoForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, Button } from 'reactstrap';

export default class TodoForm extends React.PureComponent {
	state = {
		inputText: ''
	}

	handleInputChange(value) {
		return this.setState({...this.state, inputText: value});
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.handleSubmit(e.target[0].value);

		this.setState({...this.state, inputText: ''});
	}

	removeAllCompleted(e) {
		e.preventDefault();

		this.props.removeAllCompleted();
	}
	
	render() {
		console.log('tofoform', this.props)
		return(
			<Form className = { `todo-form ${ this.props.checkCompleted() && 'expand-horiz' }` } onSubmit = { e => this.handleSubmit(e) }>
				<Input 
					value = { this.state.inputText } 
					onChange = { e => this.handleInputChange(e.target.value) }
				/>

				<Button color = 'primary' type = 'submit'>Add Task</Button>

				{ this.props.checkCompleted() && <Button color = 'warning' onClick = { e => this.removeAllCompleted(e) }>Remove All Completed Tasks</Button> }
			</Form>
		);
	}
}

TodoForm.propTypes = {
	checkCompleted: PropTypes.func,
	handleSubmit: PropTypes.func,
	removeAllCompleted: PropTypes.func
}
