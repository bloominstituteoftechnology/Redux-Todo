// React
import React, { Fragment } from 'react';

// Dependencies
import PropTypes from 'prop-types';

// Styles
import './TodoForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Input, Button } from 'reactstrap';

export default class TodoForm extends React.PureComponent {
	state = {
		inputText: '',
		errorMessage: ''
	}

	handleInputChange(value) {
		return this.setState({...this.state, inputText: value});
	}

	handleSubmit(e) {
		e.preventDefault();

		let blankInput = true;

		for (let i = 0; i < e.target[0].value.length; i++) {
			if (e.target[0].value[i] !== ' ') {
				blankInput = false;
				break;
			}
		}

		if (!e.target[0].value || blankInput) {
			return this.setState({...this.state, errorMessage: 'Your new task cannot be left blank. Please enter a task.'});
		}

		this.props.handleSubmit(e.target[0].value);

		this.setState({...this.state, inputText: '', errorMessage: ''});
	}

	removeAllCompleted(e) {
		e.preventDefault();

		this.props.removeAllCompleted();
	}
	
	render() {
		return(
			<Fragment>
				<p>{ this.state.errorMessage }</p>

				<Form className = { `todo-form ${ this.props.checkCompleted() && 'expand-horiz' }` } onSubmit = { e => this.handleSubmit(e) }>
					<Input 
						value = { this.state.inputText } 
						onChange = { e => this.handleInputChange(e.target.value) }
					/>

					<Button color = 'primary' type = 'submit'>Add Task</Button>

					{ this.props.checkCompleted() && <Button color = 'warning' onClick = { e => this.removeAllCompleted(e) }>Remove All Completed Tasks</Button> }
				</Form>
			</Fragment>
		);
	}
}

TodoForm.propTypes = {
	checkCompleted: PropTypes.func,
	handleSubmit: PropTypes.func,
	removeAllCompleted: PropTypes.func
}
