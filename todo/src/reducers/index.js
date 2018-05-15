import { ADD_TODO, FETCH_TODOS, DELETE_TODO } from '../actions';

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        case FETCH_TODOS:
            return state.concat(action.payload);
        case DELETE_TODO:
            return state.filter(todo => todo !== action.payload);
        default:
            return state;
    }
}