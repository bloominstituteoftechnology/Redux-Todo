import { ADD_TODO } from '../actions/types';

const initalState = {
    todos: [],
    todo: {}
}

export default (state = initalState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }
}
