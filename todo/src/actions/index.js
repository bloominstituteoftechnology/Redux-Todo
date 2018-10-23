export const ADDTODO_TASK = 'ADD_TODO';

export const addTodoTask = (task) => {
	return {
		type: ADDTODO_TASK,
		payload: task
	};
};
