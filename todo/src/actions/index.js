export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = todo => {
	return {
		type: ADD_TODO,
		payload: todo,
	};
};

export const deleteTodo = todo => {
	return {
		type: DELETE_TODO,
		payload: todo,
	};
};

export const toggleComplete = todo => {
	return {
		type: TOGGLE_COMPLETE,
		payload: todo,
	};
};

export const editTodo = editedTodo => {
	return {
		type: EDIT_TODO,
		payload: editedTodo,
	};
};
