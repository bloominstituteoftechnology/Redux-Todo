import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
	font-size: 1.6rem;
	color: black;
	font-weight: bold;
	text-decoration: ${props => props.complete === true ? 'line-through' : 'none'};
`;

const TodoTask = (props) => {
	return <H1 complete={props.complete} onClick={()=> props.toggleComplete(props.index)}>{props.item.task}</H1>;
};

export default TodoTask;
