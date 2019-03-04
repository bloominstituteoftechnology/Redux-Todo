import { FETCH_TODOS, ADD_TODO } from '../actions/types';

const initalState = {
    todos: [],
    todo: {}
}

export default (state = initalState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                todos: [...state.todos]
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }
}
