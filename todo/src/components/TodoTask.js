import React from 'react';
import styled from 'styled-components';

export const H1 = styled.h1`
	font-size: ${(props) => (props.task ? '1.6rem' : '3rem')};
	color: #e1e5ee;
	margin: 1% 0;
	font-weight: bold;
	font-family: cursive;
	text-decoration: ${(props) =>
		props.completed === true
			? 'line-through'
			: props.header
			? 'underline'
			: 'none'};
`;

const TodoTask = (props) => {
	return (
		<H1
			task
			completed={props.completed}
			onClick={() => props.toggleComplete(props.index)}
		>
			{props.item.task}
		</H1>
	);
};

export default TodoTask;
