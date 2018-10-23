export const ADDTODO_TASK = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodoTask = (task) => {
	return {
		type: ADDTODO_TASK,
		payload: task
	};
};

export const toggleComplete = (index) => {
	return {
		type: TOGGLE_COMPLETE,
		playload: index
	};
};
