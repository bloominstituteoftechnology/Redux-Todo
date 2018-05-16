import { CREATE_LIST, ADD_TODO } from "../actions";



export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_LIST:
            return state.concat(action.payload);
    
        case ADD_TODO:
            return state.concat(action.payload);
        
        default: 
            return state;

}
};