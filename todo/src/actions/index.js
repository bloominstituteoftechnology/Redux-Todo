export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = text => {
	// Fill in this function
	return { type: 'ADD_TODO', text };
};

export const toggleTodo = id => {
	// Fill in this function
	return { type: 'TOGGLE_TODO', id };
};
