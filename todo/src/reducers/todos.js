import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE, EDIT_TODO } from '../actions';

const mySessionStorage = window.sessionStorage;
// mySessionStorage.clear();

const renderTodos = () => {
	const todos = [];
	const keys = Object.keys(mySessionStorage);

	for (let i = 0; i < mySessionStorage.length; i++) {
		const todo = {};

		todo['text'] = keys[i];

		const isCompleted = mySessionStorage[keys[i]];
		if (isCompleted === 'true') todo['completed'] = true;
		else todo['completed'] = false;

		todo['id'] = todos.length;

		todos.push(todo);
	}
	return todos;
};

export default (todos = [], action) => {
	// console.log(action.payload);
	switch (action.type) {
		case ADD_TODO:
			// console.log(todos);
			// console.log(action.payload.text);
			// console.log(Object.keys(mySessionStorage));
			mySessionStorage.setItem(action.payload.text, action.payload.completed);
			return renderTodos();
		case DELETE_TODO:
			mySessionStorage.removeItem(action.payload.text);
			return renderTodos();
		case TOGGLE_COMPLETE:
			let sessionCompleted = mySessionStorage.getItem(action.payload.text);

			if (sessionCompleted === 'false') sessionCompleted = 'true';
			else sessionCompleted = 'false';

			mySessionStorage.setItem(action.payload.text, sessionCompleted);
			return renderTodos();
		case EDIT_TODO:
			// console.log(action.payload);
			const todoCompleted = mySessionStorage.getItem(action.payload.text);
			mySessionStorage.setItem(action.payload.edit, todoCompleted);
			mySessionStorage.removeItem(action.payload.text);

			return renderTodos();
		default:
			return renderTodos();
	}
};
