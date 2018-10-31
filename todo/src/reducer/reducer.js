import {ADD_TODO} from '../actions/actions';

const initialState = {
    todos: []
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }
}