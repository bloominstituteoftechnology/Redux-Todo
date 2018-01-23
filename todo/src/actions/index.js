export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

let nextTodoId = 0;

export const addTodo = todo => {
	return {
		type: ADD_TODO,
		payload: { ...todo, id: nextTodoId++ },
	};
};

export const deleteTodo = id => {
	return {
		type: DELETE_TODO,
		payload: id,
	};
};

export const toggleComplete = id => {
	return {
		type: TOGGLE_COMPLETE,
		payload: id,
	};
};
