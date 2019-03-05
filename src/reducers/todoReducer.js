import { ADD_TODO, TOGGLE_TODO_COMPLETE, DELETE_TODO } from '../actions';

const initalState = {
    todos: []
}

export default (state = initalState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: Date.now(),
                todo: action.payload,
                completed: false
            }

            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case TOGGLE_TODO_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state;
    }
}
