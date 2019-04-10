import { ADD_TODO } from '../actions';

const initialState = {
    todo: [
        {
        value: 'Walk the dog',
        completed: false
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload] 
            };
        default:
            return state;
    }
};