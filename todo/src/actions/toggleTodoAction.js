const TOGGLETODO = "TOGGLETODO";

export function toggleTodoAction(id) {
	// sends completion status to todosReducer
	return {
		type: TOGGLETODO,
		payload: id
	};
}
