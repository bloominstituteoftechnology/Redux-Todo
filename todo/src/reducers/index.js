import { ADD, TOGGLE, DELETETASK, DELETEALL } from '../actions';

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
                    task
            });
            return {
                tasks: [...newTasks]
            };
        case DELETETASK:
            let taskDeleted = [
                ...state.tasks.slice(0, action.data), 
                ...state.tasks.slice(action.data + 1)
            ];
            return {
                tasks: taskDeleted
            };
        case DELETEALL:
            return {
                tasks: []
            };
		default:
			return { ...state };
	}
};

export default reducer;
