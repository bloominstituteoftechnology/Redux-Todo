const TOGGLETODO = "TOGGLETODO";

export function toggleTodoAction() {
	// sends completion status to todosReducer
	return {
		type: TOGGLETODO,
		payload: { isComplete: "" }
	};
}
