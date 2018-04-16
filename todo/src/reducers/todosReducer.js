export default function todosReducer(state={
	todos: [],
}, action) {
	switch(action.type) {
		case "NEWTODO"; {
			// update store with the new todo
		}
		case "TOGGLETODO": {
			// change isComplete to the opposite value
		}
	}
}