export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

const initialState = {
	todoList: [
        
    ]
};




const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				todoList: [...state.todoList, { task: action.payload , completed: false}]
            };
            case TOGGLE_COMPLETE: 
            return {
                ...state,
                todoList: state.todoList.map((task, index) => {
                    if(index === action.payload) {
                        return {...task, completed: !task.completed};
                    } else {
                        return task
                    }
                })
            };
            case CLEAR_COMPLETED:
            return {
                ...state,
                todoList: state.todoList.filter((task) => task.completed === false)
            };
		default:
			return state;
	}
};

export default reducer;
