import React from 'react';
import styled from 'styled-components';
import TodoTask, {H1} from './TodoTask';

const Section = styled.section`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	background: #605770;
	border: 1px solid #E1E5EE;
	padding: 5%;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	
`;

const TodoList = (props) => {
	return (
		<Section>
			<H1 header> Todo</H1>
			{props.list.map((item, index) => (
				<TodoTask
				key={index}
				item={item}
				index={index} 
				completed={item.completed}
				toggleComplete={props.toggleComplete}
				/>
			))}
		</Section>
	);
};

export default TodoList;
