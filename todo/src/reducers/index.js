import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
	todos: [
		{
			todo: 'Walk Dog',
			id: 1234567890,
			completed: false
		},
		{
			todo: 'Eat breakfast',
			id: 1234567891,
			completed: false
		},
		{
			todo: 'Get dressed',
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
			return {
				todos: [
					...state.todos.map((todo) => {
						if (todo.id !== action.payload.id) {
							return todo;
						} else {
							return action.payload;
						}
					})
				]
			};
		default:
			return state;
	}
};
