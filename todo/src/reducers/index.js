import { ADD_TODO, GET_TODOS, DELETE_TODO } from '../actions';

const todosList = [];

export const reducer = (state = todosList, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        case GET_TODOS:
            return state.concat(action.payload);
        case DELETE_TODO:
            return state.filter(todo => { return todo !== action.payload});
        default: 
            return state;
    }
         
}