export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const EDIT_TODO = 'EDIT_TODO';
export const SAVE_TODOS = 'SAVE_TODOS';
export const LOAD_TODOS = 'LOAD_TODOS';
export const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
export const CLEAR_TODOLIST = 'CLEAR_TODOLIST';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = todo => {
	return {
		type: ADD_TODO,
		payload: todo,
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

export const editTodo = todo => {
	return {
		type: EDIT_TODO,
		payload: todo,
	};
};

export const loadTodos = todos => {
	return {
		type: LOAD_TODOS,
		payload: todos,
	};
};

export const changeVisibility = () => {
	return {
		type: CHANGE_VISIBILITY,
	};
};

export const clearTodoList = () => {
	return {
		type: CLEAR_TODOLIST,
	};
};

export const clearCompleted = () => {
	return {
		type: CLEAR_COMPLETED,
	};
};
