export const ADDTODO = 'ADDTODO';
export const TOOGLE_COMPLETE = 'TOOGLE_COMPLETE';

export const addTodo = todo => {
	return {
    type: 'ADDTODO',
	  payload: todo,
  };
};

export const toggleComplete = (id) => {
	return {
    type: 'TOOGLE_COMPLETE',
		payload: id,
	};
};