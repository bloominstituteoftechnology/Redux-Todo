import { ADD_TODO, TOGGLE_TODO } from '../actions';

export const initializedState = {
	todos: [],
};

export function todosReducer(state = initializedState, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [
					...state.todos,
					{
						id: action.id,
						text: action.text,
						completed: false,
					},
				],
			};
		case TOGGLE_TODO:
			const nextTodo = state.todos.map((todo) => {
				if (todo.id === action.id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				} else {
					return { ...todo };
				}
			});
			return { todos: nextTodo };

		default:
			return state;
	}
}
