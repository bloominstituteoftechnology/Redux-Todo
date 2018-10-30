// import { ADD_TODO, FETCH_TODOS, DELETE_TODO } from '../actions';

// 1. The general flow of steps will be to create your store, 2. create your reducers, create your containers, and then create the action creators.

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: 
        // The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
            return state.concat(action.payload);
        case FETCH_TODOS:
            return state.concat(action.payload);
        case DELETE_TODO:
            return state.filter(todo => todo !== action.payload);
        default:
            return state;
    }
}