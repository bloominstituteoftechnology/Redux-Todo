import { ADDTODO, TOGGLETODO, CLEARCOMPLETED, DELETETODO } from '../actions';

const storage = localStorage.getItem('todos')

const initialState = {
    todos: 
        storage ? 
        JSON.parse(storage) :
        [{inputText: 'click a todo to mark it complete', completed: false}, {inputText: 'delete completed todos with the "clear completed" button above', completed: false}]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
        return { todos: [ ...state.todos, {id: action.id, inputText: action.inputText, completed: false}]}
        case TOGGLETODO:
            return { todos: state.todos.map((todo, ind) => (
                ind === action.id ? {...todo, completed: !todo.completed} : todo
            ))} 
        case CLEARCOMPLETED:
            return { todos: state.todos.filter(todo => (
                todo.completed === false
            ))} 
        case DELETETODO:
        return { todos: state.todos.filter((todo, ind) => (
            ind !== action.id
        ))}
        default:
            return state;
    }
  };
  