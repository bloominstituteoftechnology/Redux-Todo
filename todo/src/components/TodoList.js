import React from 'react';
import styled from 'styled-components';
import TodoTask from './TodoTask';

const Section = styled.section`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	background: lightcyan;
	border: 1px solid black;
	padding: 5%;
`;

const TodoList = (props) => {
	return (
		<Section>
			{props.list.map((item, index) => (
				<TodoTask
				key={index}
				item={item}
				index={index} 
				complete={props.complete}
				toggleComplete={props.toggleComplete}
				/>
			))}
		</Section>
	);
};

export default TodoList;
