import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../action';

const initialState = [{ text: 'survive', completed: true, id: 0 }];

export const todosReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        default:
        return state;
    }
}