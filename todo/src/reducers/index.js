import {
	ADD_TODO,
	REMOVE_TODO,
	TOGGLE_TODO,
	EDIT_TODO,
	CLEAR_COMPLETED_TODOS
} from "../actions";

const initialState = {
	todos: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [
					...state.todos,
					{
						value: action.payload.text,
						completed: false,
						id: action.payload.id
					}
				]
			};

		case REMOVE_TODO:
			return {
				todos: [
					...state.todos.filter(todo => todo.id != action.payload)
				]
			};

		case TOGGLE_TODO:
			return {
				todos: state.todos.map(todo => {
					if (todo.id === action.payload) {
						return {
							...todo,
							completed: todo.completed ? false : true
						};
					} else {
						return todo;
					}
				})
			};

		case EDIT_TODO:
			return {
				todos: state.todos.map(todo => {
					if (todo.id === action.payload.id) {
						return { ...todo, value: action.payload.text };
					} else {
						return todo;
					}
				})
			};

		case CLEAR_COMPLETED_TODOS:
			return {
				todos: [
                    ...state.todos.filter(todo => todo.completed === false)
                ]
			};

		default:
			return state;
	}
};
