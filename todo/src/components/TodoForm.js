import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const TodoForm = props => {
	return (
		<div>
			<Form>
				<FormGroup>
					<Label for="Add A Todo">Add a Todo </Label>
					<div className="form">
						<Input
							name="todoText"
							value={props.todoText}
							type="text"
							onChange={props.handleInputChange}
							placeholder="Enter here"
						/>
						<Button color="primary" onClick={props.addTodo}>
							Submit
						</Button>
					</div>
				</FormGroup>
			</Form>
		</div>
	);
};

export default TodoForm;
