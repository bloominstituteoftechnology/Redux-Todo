const TOGGLETODO = "TOGGLETODO";

export function toggleTodoAction(index) {
	// sends completion status to todosReducer
	return {
		type: TOGGLETODO,
		payload: index
	};
}
