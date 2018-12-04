export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

const initialState = {
	todoList: [
        { task: 'Clean Room', complete: false }, 
        { task: 'Load Dishwasher', complete: false }
    ]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				todoList: [...state.todoList, { task: action.payload , complete: false}]
            };
            case TOGGLE_COMPLETE: 
            return {
                ...state,
                todoList: state.todoList.map((task, index) => {
                    if(index === action.payload) {
                        return {...task, complete: !task.complete};
                    } else {
                        return task
                    }
                })
            };
		default:
			return state;
	}
};

export default reducer;
