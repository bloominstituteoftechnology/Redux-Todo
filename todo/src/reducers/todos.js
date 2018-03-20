import {
	ADD_TODO,
	DELETE_TODO,
	TOGGLE_COMPLETE,
	EDIT_TODO,
	LOAD_TODOS,
	CHANGE_VISIBILITY,
	CLEAR_TODOLIST,
	CLEAR_COMPLETED,
} from '../actions';

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
		case EDIT_TODO:
			return todos.map(todo => {
				if (todo.id === action.payload.id)
					return { ...todo, text: action.payload.text };
				return todo;
			});
		case LOAD_TODOS:
			return [...action.payload];
		case CHANGE_VISIBILITY:
			return todos;
		case CLEAR_TODOLIST:
			return [];
		case CLEAR_COMPLETED:
			return todos.filter(todo => !todo.completed);
		default:
			return todos;
	}
};
