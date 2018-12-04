export const ADD_TODO = 'ADD_TODO';

const initialState = {
    todos: [],
}

const todoHandler = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        default:
            return state;
    }
};

export default todoHandler;