export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

let todos = [];
export const add = (name) => {
	return {
		todos: [
			{
				value: name,
				completed: false
			}
		]
	};
};

export const remove = (name) => {
	return {
		todos: [
			{
				value: name,
				completed: true
			}
		]
	};
};


