import { ADD_TODO, FETCH_TODOS } from '../actions';

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        case FETCH_TODOS:
            return state.concat(action.payload);
        default:
            return state;
    }
}