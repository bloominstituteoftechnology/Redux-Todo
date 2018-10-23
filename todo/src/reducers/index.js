import { ADDTODO, TOGGLETODO, CLEARCOMPLETED } from '../actions';

const initialState = {
    todos: [{inputText: 'click a todo to mark it complete', completed: false}, {inputText: 'delete completed todos with the "clear completed" button above', completed: false}]
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
            return { todos: state.todos.map(todo => (
                todo.completed === false ? todo : {}
            ))} 
        default:
            return state;
    }
  };
  