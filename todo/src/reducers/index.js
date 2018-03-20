import { ADD_TODO, DELETE_TODO } from "../actions";

const todoReducer = (todos = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			// let newTodo = {};
			// newTodo[action.id] = {id: action.id, text: action.payload};
			//   return Object.assign({}, todos, newTodo);
			return [
				...todos,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];
		case DELETE_TODO:
			const newTodos = todos.filter(todo => {
  			return todo.id !== action.id 
			});
			return todos = newTodos;
		// let nextState = Object.assign({}, todos);
		// delete nextState[action.id];
		// 	return nextState;
		default:
			return todos;
	}
};
export default todoReducer;
