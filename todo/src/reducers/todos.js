import { ADDTODO, REMOVETODO, TOGGLETODO } from '../actions/todoActions';


export default (todos = [], action) => {
    
    switch (action.type) {
        case ADDTODO:   
            todos = [...todos, action.payload];
            return todos;
        case REMOVETODO:
        return [...todos.slice(0, action.payload), ...todos.slice(action.payload+1)];
        case TOGGLETODO:
        todos = todos.map((todo, index) => {
        	if (index === Number(action.payload)) { 
        	return { todos: todo.todos, toggle: !todo.toggle };
        }
        return todo;
        });
        default:
            return todos
    }
}
