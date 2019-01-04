import { ADD_TODO, MARK_FINISHED, DELETE_TODO } from '../actions';

const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return { todos: [...state.todos, action.entry] }
        case MARK_FINISHED:
            return { todos: state.todos.map(todo => { return todo.id === action.id ? 
                {...todo, completed: !todo.completed } : todo } )};
        case DELETE_TODO:
            return { todos: state.todos.filter(todo => todo.id !== action.id) }; // ???
        default:
            return state;
    }
}