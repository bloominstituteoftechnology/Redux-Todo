// import { IMPORT ACTIONS HERE } from '../actions'
export const ADD_TASK = "ADD_TASK";

const initialState = {
	todos: [
		{
			taskName: "Sample Task",
			completed: false,
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				todos: [
					...state.todos,
					{ taskName: action.payload, completed: false },
				],
			};
		default:
			return state;
	}
};

export default reducer;
