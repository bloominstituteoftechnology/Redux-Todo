import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	flex-flow: column nowrap;
	padding: 5%;
	background: yellowgreen;
`;

const Input = styled.input`
	padding: 1%;
	color: grey;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;
const Button = styled.button`
	padding: 1%;
	background: white;
	color: black;
	border: 1px solid black;
	border-radius: 5px;
`;

const TodoForm = (props) => {
	return (
		<Form onSubmit={props.addTask}>
			<Input
				type="text"
				name="inputText"
				placeholder="add a new task..."
				value={props.inputText}
				onChange={props.handleChange}
			/>

			<Button type="submit" onClick={props.addTask}>
				Add Task
			</Button>
		</Form>
	);
};

export default TodoForm;
