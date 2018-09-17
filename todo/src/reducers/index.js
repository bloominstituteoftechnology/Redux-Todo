// Actions
import { HANDLE_INPUT_CHANGE, HANDLE_SUBMIT, TOGGLE_COMPLETED } from '../actions/TodoActions';

const initialState = {
	todoList: [],
	inputText: ''
};

export default (state = initialState, action) => {
	switch(action.type) {
		case HANDLE_INPUT_CHANGE: {
			return {...state, inputText: action.payload};
		} // end case HANDLE_INPUT_CHANGE

		case HANDLE_SUBMIT: {
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
		} // end case HANDLE_SUBMIT

		case TOGGLE_COMPLETED: {
			const newTodoList = [...state.todoList];
			
			newTodoList[action.payload].completed = !newTodoList[action.payload].completed;

			return {...state, todoList: newTodoList};
		} // end case TOGGLE_COMPLETED

		default: {
			return state;
		} // case default
	} // end switch(action.type)
};
