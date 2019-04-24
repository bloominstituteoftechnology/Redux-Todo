import { ADD_TODO, MARK_FINISHED, DELETE_TODO, DELETE_FINISHED } from '../actions';

const initialState = localStorage.getItem('todos') === null ? 
    { todos: [] } :
    { todos: JSON.parse(localStorage.getItem('todos'))};

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] }
        case MARK_FINISHED:
            return { ...state, todos: state.todos.map(todo => { return todo.id === action.id ? 
                {...todo, completed: !todo.completed } : todo } )};
        case DELETE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) };
        case DELETE_FINISHED:
            return { ...state, todos: state.todos.filter(todo => !todo.completed) };
        default:
            return state;
    }
}