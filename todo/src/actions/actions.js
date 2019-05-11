export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

let todos = [];
// let completed: false;
export const add = (litem) => {
	return {
		type: ADD,
		payload: todos.concat(litem)
		// payload: litem
		// payload: ({
		// 	todos: todos.concat(litem),
		// 	completed: completed
		// })
	};
	
	
};

export const remove = (litem) => {
	return {
		type: REMOVE,
		payload: litem
		// payload: ({
		// 	todos: todos,
		// 	completed: !completed
		// })
	};
};


