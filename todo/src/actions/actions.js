export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

let todos = [];
export const add = (litem) => {
	return {
		type: ADD,
		payload: todos.concat(litem)
	};
	
	
};

export const remove = (litem) => {
	return {
		type: REMOVE,
		payload: litem
	};
};


