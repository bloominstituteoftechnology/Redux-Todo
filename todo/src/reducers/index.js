// Actions
import { TODO_ACTION, HANDLE_INPUT_CHANGE, HANDLE_SUBMIT } from '../actions/TodoActions';

const initialState = {
	todoList: [],
	inputText: ''
};

export default (state = initialState, action) => {
	switch(action.type) {
		case TODO_ACTION:
			return state;
		case HANDLE_INPUT_CHANGE:
			return {...state, inputText: action.payload};
		case HANDLE_SUBMIT:
			const newTodoList = [...state.todoList];
			newTodoList.push({
				value: action.payload,
				completed: false
			});

			return {
				...state, 
				todoList: newTodoList, 
				inputText: ''
			};
		default:
			return state;
	}
};
