export const initialState = {
	todo: [
		{
			value: "Walk The Dog",
			completed: false,
			id: 0
		}
	]
};

export function allReducers(state = initialState, action) {
	switch (action.type) {
		case "ADD_ITEM":
			{
				console.log(action.payload);
			}
			return {
				todo: [
					...state.todo,
					{
						value: action.payload,
						completed: false,
						id: Date.now()
					}
				]
			};
		case "COMPLETED_ITEM":
			const newArray = state.todo.map(todo => {
				if (todo.id === action.payload) {
					todo.completed = !todo.completed;
					return todo;
				} else {
					return todo;
				}
			});
			return {
				todo: newArray
			};

		default:
			return state;
	}
}
