export const ADDTODO = 'ADDTODO';
export const TOOGLE_COMPLETE = 'TOOGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = todo => {
	return {
        type: ADDTODO,
	    payload: todo				
  	};
};

export const toggleComplete = (id) => {
	return {
        type: TOOGLE_COMPLETE,
		payload: id				 
	};
};

export const deleteTodo = (id) => {
    return{
        type: DELETE_TODO,
        payload: id
    };
};