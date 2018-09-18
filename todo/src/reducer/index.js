//Reducer index.js
import { ADD_TODO } from '../actions';

export const initialState ={
    todosList:[{
        value:'',
        completed:false,
    }],
};

export function todoReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todosList:action.payload};
        default:
            return state;
    }
}