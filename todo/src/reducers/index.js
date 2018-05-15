import { FETCH_TODOLIST, CREATE_TODO } from "../actions";

export const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_TODOLIST:
            return state.concat(action.payload);
        case CREATE_TODO:
            return state.concat(action.payload);
        default:
            return state;
    }
};