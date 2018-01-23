import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE } from '../actions';

export default (todos = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [action.payload, ...todos];
		case DELETE_TODO:
			return todos.filter(todo => todo.id !== action.payload);
		case TOGGLE_COMPLETE:
			return todos.map(todo => {
				if (todo.id === action.payload)
					return { ...todo, completed: !todo.completed };
				return todo;
			});
		default:
			return todos;
	}
};
