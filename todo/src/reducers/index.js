import { ADD, TOGGLE, DELETE } from '../actions';

const initialState = {
	tasks: [
		{
			value: 'Walk the dog',
			completed: false,
		},
	],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			return {
				tasks: [
					...state.tasks,
					{
						value: action.data,
						completed: false,
					},
				],
			};
		case TOGGLE:
			let newTasks =  state.tasks.map((task, index) => {
                return (index === action.data) ? 
                    {
                        value: task.value,
                        completed: !task.completed,
                    } :
                    {
                        value: task.value,
                        completed: task.completed
                    }
            });
            return {
                tasks: [...newTasks]
            };
        case DELETE:
            let deletedState = [
                ...state.tasks.slice(0, action.data), 
                ...state.tasks.slice(action.data + 1)
            ];
            return {
                tasks: deletedState
            };
		default:
			return { ...state };
	}
};

export default reducer;
