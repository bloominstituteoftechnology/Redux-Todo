import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
	todos: [
		{
			task: 'Walk Dog',
			id: 1234567890,
			completed: false
		},
		{
			task: 'Eat breakfast',
			id: 1234567891,
			completed: false
		},
		{
			task: 'Get dressed',
			id: 1234567892,
			completed: false
		}
	]
};
export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { todos: [ ...state.todos, action.payload ] };
		case TOGGLE_COMPLETED:
			console.log('toggle completed triggered', action);
		default:
			return state;
	}
};
