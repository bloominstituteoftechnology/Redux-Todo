export default function todosReducer(
	state = {
		todos: [{ text: "call Fred", isComplete: false }]
	},
	action
) {
	console.log(action.payload);
	switch (action.type) {
		case "NEWTODO": {
			let newTodos = state.todos.concat(action.payload);
			return Object.assign({}, state, { todos: newTodos });
		}
		case "TOGGLETODO": {
			state.todos.map((todo, index) => {
				// something is wrong here
				if (action.payload === index) {
					return !todo.isComplete;
				}
			});
		}
		default:
			return state;
	}
}
