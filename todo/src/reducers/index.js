export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODOS = 'DELETE_TODOS';

const storedTodos = JSON.parse(localStorage.getItem('todos'));

const initialState = {
    todos: storedTodos ? storedTodos : [],
}

const todoHandler = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload, isComplete: false}],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    return index === action.payload ? {...todo, isComplete: !todo.isComplete} : todo;
                })
            }
        case DELETE_TODOS:
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.isComplete)
            }
        default:
            return state;
    }
};

export default todoHandler;