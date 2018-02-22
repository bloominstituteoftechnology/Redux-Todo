import { ADDTODO, TOOGLE_COMPLETE } from '../actions/todoActions';

export default (todos = [], action) => {
	switch (action.type) {
		case ADDTODO: 
			return [...todos, action.payload];
		case TOOGLE_COMPLETE:
			return todos.map((todo, i) => {
        if (i === Number(action.payload)) {
				  return Object.assign({}, { value: todo.value, completed: !todo.completed }); 
			  }
			  return todo;
		  });
		default:
			return todos;
	}
};