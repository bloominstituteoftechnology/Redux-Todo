export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";

export const addTodo = (id, text) => {
	return {
		type: ADD_TODO,
		payload: {
			id: id,
			text: text
		}
	};
};

export const removeTodo = id => {
	return {
		type: REMOVE_TODO,
		payload: id
	};
};

export const toggleTodo = id => {
	return {
		type: TOGGLE_TODO,
		payload: id
	};
};

export const editTodo = (id, text) => {
	return {
		type: EDIT_TODO,
		payload: {
			id: id,
			text: text
		}
	};
};

export const clearCompletedTodos = () => {
	return {
		type: CLEAR_COMPLETED_TODOS,
		payload: {}
	};
};
