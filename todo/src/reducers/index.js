import { FETCH_TODOS, ADD_MY_TODO } from '../actions';

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return state.concat(action.payload);
        case ADD_MY_TODO:
            return state.concat(action.payload);
        default:
            return state;
    }
}