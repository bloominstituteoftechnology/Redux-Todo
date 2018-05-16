export const ADDTODO = 'ADDTODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOOGLE_COMPLETE = 'TOOGLE_COMPLETE';
export const IMPORT_STATE = 'IMPORT_STATE';

export const addTodo = (todo) => {
	return {
      type: ADDTODO,
			payload: todo				
  	};
};

export const removeTodo = (id) => {
	 return {
      type: 'REMOVE_TODO',
		  payload: id,
	 };
};	 

export const toggleComplete = (id) => {
	return {
     type: TOOGLE_COMPLETE,
		 payload: id				 
	};
};

export const importState = () => {
	return {
    type: 'IMPORT_STATE',
	}
}	