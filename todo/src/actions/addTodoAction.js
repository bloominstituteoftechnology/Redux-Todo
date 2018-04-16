const NEWTODO = "NEWTODO";

export function addTodoAction() {
	// send new Todo data to todosReducer
	return {
		type: NEWTODO,
		payload: ""
	};
}
