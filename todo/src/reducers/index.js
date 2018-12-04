export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const initialState = {
    todos: [],
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
        default:
            return state;
    }
};

export default todoHandler;