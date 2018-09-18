import { ADD_TODO, TOGGLE_TODO } from '../actions';

export default (
	todos = [
		{
			id: 1,
			value: 'Walk the dog.',
			completed: false
		}
	],
	action
) => {
	switch (action.type) {
		case ADD_TODO:
			// Fill in the body of this case
			return [...todos, { value: action.text, completed: false }];
		case TOGGLE_TODO:
			// Fill in the body of this case
			const todo = todos.filter(todo => todo.id === action.id);
			todo.completed = !todo.completed;
			return [...todos, todo];
		default:
			return todos;
	}
};
