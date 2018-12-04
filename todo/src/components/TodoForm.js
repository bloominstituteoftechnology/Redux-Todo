import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	flex-flow: column nowrap;
	padding: 5%;
	background: #9AC6C5;
	border: 1px solid #e1e5ee;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	border-top: none;
`;

const Input = styled.input`
	padding: 1%;
	color: #9e7682;
	border: 1px solid #9e7682;
	border-radius: 5px;
	text-align: center;
	margin: 0 10% 5%;
	font-weight: bold;
	:focus {
		outline: none;
	}
`;
const Button = styled.button`
	padding: 1%;
	background: white;
	color: #9e7682;
	border: 1px solid #9e7682;
	border-radius: 5px;
	margin: 0 10% 5%;
	font-weight: bold;
	:hover {
		color: white;
		background: #9e7682;
		border: 1px solid white;
	};
	:focus {
		outline: none;
	}
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
			<Button type="button" onClick={props.clearCompleted}>
				Clear Completed Tasks
			</Button>
		</Form>
	);
};

export default TodoForm;
