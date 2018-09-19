import { ADD_TODO, TOGGLE_TODO } from '../actions';

// The initial state
const initialState = {
    todos:[
        {
            value: 'Walk the dog',
            completed: false
        },
    ]
};

// currentState = reducer (state, action) -> returns an object that has the same shape as state
export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}

        default:
            return state;
    }
}