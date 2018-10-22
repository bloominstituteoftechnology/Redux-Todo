export const ADDTODO_ITEM = 'ADD_TODO';

export const addTodoItem = (item) => {
	return {
		type: ADDTODO_ITEM,
		payload: item
	};
};
