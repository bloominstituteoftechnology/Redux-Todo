import { ADD_TODO, DELETE_TODO } from "../actions";


const todoReducer = (todos = {}, action) => {
	switch (action.type) {
    case ADD_TODO:
    let newTodo = {};
    newTodo[action.id] = {id: action.id, text: action.text};
      return Object.assign({}, todos, newTodo);
      // [
			// 	...todos,
			// 	{
			// 		id: action.id,
			// 		text: action.text,
			// 		completed: false
			// 	}
			// ];
    case DELETE_TODO:
    let nextState = Object.assign({}, todos);
    delete nextState[action.id];
			return nextState;
		default:
			return todos;
	}
};
export default todoReducer;