import { FETCH_TODO, CREATE_TODO} from "../actions";

export const todoReducer = (state=[], action) => {
    switch (action.type) {
        case FETCH_TODO:
            return state.concat(action.payload);
        case CREATE_TODO:
            return state.concat(action.payload);
        default: 
            return state;
    }
}