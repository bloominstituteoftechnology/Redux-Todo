export const initialState = {
	todo: [
		{
			value: "Walk The Dog",
			completed: false
		}
	],
	textField: ""
};

export function addItemReducer(state = initialState.todo, action) {
	switch (action.type) {
		case "ADD_ITEM":
			return { ...state, todo: action.payload };
		default:
			return state;
	}
}

export function completedReducer(state = initialState.todo.completed, action) {
	switch (action.type) {
		case "COMPLETED_ITEM":
			return { ...state, completed: action.payload };
		default:
			return state;
	}
}
