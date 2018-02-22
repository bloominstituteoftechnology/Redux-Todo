import { ADD_TODO, REMOVE_TODO, TOOGLE_COMPLETE, IMPORT_STATE } from '../actions/todoActions';

export default (todos = [], action) => {
	switch (action.type) {
    case ADD_TODO:
      todos = [...todos, action.payload];
      window.localStorage.setItem('todos', JSON.stringify(todos));  
      return todos;
    case REMOVE_TODO:
      const id = Number(action.payload);
      todos = [...todos.slice(0, id), ...todos.slice(id + 1)];
      window.localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
		case TOOGLE_COMPLETE:
			todos = todos.map((todo, i) => {
        if (i === Number(action.payload)) {
				  return { value: todo.value, completed: !todo.completed }; 
			  }
			  return todo;
      });
      window.localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    case IMPORT_STATE:
      return JSON.parse(window.localStorage.getItem('todos'));
		default:
			return todos;
	}
};