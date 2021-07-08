import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from './actions';

const initialState = [{text: 'Clean Basement', completed: false, id: 0}];

const toDoListReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            // code here
            return state;
        case CHECK_TODO:
            // code here
            return state;
        default:
            return state;
    }
};

export default toDoListReducer;