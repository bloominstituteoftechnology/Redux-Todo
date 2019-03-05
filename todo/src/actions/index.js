export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

export const addTodo = (todo) => {
	return {
		type: ADD_TODO,
		payload: {
			todo,
			id: Date.now(),
			completed: false
		}
	};
};

export const toggleCompleted = (todo) => {
	return {
		type: TOGGLE_COMPLETED,
		payload: {
			...todo,
			completed: !todo.completed
		}
	};
};
