import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todo: 'Todo from Redux store'
};

export const reducer = (state = initialState, action) => {
    console.log('reducer - action: ', action);
    switch (action.type) {
        case ADD_TODO:
            console.log('add_todo', action);
            return (
                action.payload
            );
        case TOGGLE_TODO:
            return (
                action.payload
            )        
        default:
            return state;
    }        
};
