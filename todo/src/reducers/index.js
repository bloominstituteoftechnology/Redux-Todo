import { ADD_TODO, TOGGLE_TODOS } from '../actions';

const initialState = { 
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { todo: action.payload, completed: false }]
            };
        case TOGGLE_TODOS:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    } else {
                        return todo;
                    }
                })
            };
        default:
            return state;
    }
};

export default todoReducer;
