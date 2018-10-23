import { ADDTODO_TASK } from '../actions';

const initialState = {
	tasks: [
		{
			task: 'Learn about Redux',
			complete: true
		},
		{
			task: 'Apply Redux to project',
			complete: false
		}
	]
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDTODO_TASK:
			return {
				...state,
				tasks: [ ...state.tasks, { task: action.payload, complete: false } ]
			};
		default:
			return state;
	}
};

export default todoReducer;
