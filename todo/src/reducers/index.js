import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

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
			return [
				...todos,
				{ id: Date.now(), value: action.text, completed: false }
			];

		case TOGGLE_TODO:
			let index = todos.findIndex(todo => todo.id === action.id);
			let updatedTodos = todos.slice();
			updatedTodos[index].completed = !updatedTodos[index].completed;
			return updatedTodos;

		case DELETE_TODO:
			let dindex = todos.findIndex(todo => todo.id === action.id);
			let dupdatedTodos = todos.slice();
			dupdatedTodos.splice(dindex, 1);
			return dupdatedTodos;

		default:
			return todos;
	}
};
