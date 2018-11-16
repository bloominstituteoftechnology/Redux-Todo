import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {
	return (
		<React.Fragment> // way to return sibling elements without putting a div on the screen
			<TodoForm />
			<TodoList />
		</React.Fragment>
	);
};

export default Todos;