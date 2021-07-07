export const ADD_TASK = "ADD_TASK";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

const initialState = {
	tasks: [{ 
        taskName: "", 
        completed: false }],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				tasks: [
					...state.tasks,
					{
						taskName: action.payload,
						completed: false,
					},
				],
			};
		case TOGGLE_COMPLETED:
			return {
				...state,
				tasks: state.tasks.map((task, index) => {
					if (index === action.payload) {
						return {
							...task,
							completed: !task.completed,
						};
					} else {
						return task;
					}
				}),
			};
		default:
			return state;
	}
};

export default reducer;
