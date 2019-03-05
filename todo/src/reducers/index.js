import { addTodo, toggleCompleted } from '../actions';

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
		case addTodo:
			console.log('add todo triggered!', action);
		case toggleCompleted:
			console.log('toggle completed triggered', action);
		default:
			return state;
	}
};
