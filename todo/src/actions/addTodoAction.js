const NEWTODO = "NEWTODO";

export function addTodoAction(text) {
	// send new Todo data to todosReducer
	return {
		type: NEWTODO,
		payload: text
	};
}
