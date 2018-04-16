export default function todosReducer(state={
	todos: [],
}, action) {
	switch(action.type) {
		case "NEWTODO"; {
			// update store with the new todo
			return {...state.todos.concat(action.payload)};
		}
		case "TOGGLETODO": {
			// change isComplete to the opposite value
			return !action.payload.isComplete;
		}
		default:
			return state;
	}
}