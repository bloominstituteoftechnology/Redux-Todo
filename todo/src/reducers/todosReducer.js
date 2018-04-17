export default function todosReducer(
	state = {
		todos: [{ text: "call Fred", isComplete: false }]
	},
	action
) {
	switch (action.type) {
		case "NEWTODO": {
			// update store with the new todo
			// return { ...state.todos.concat(action.payload) };
			let newTodos = state.todos.concat(action.payload);
			return Object.assign({}, state, {todos: newTodos});
		}
		case "TOGGLETODO": {
			// change isComplete to the opposite value
			return state.todos.map((todo, index) => {
				if (action.payload === index) {
					return !todo.isComplete;
				}
			});
		}
		default:
			return state;
	}
}
