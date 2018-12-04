import {ADDITEM, DELETEITEM } from '../actions';


const todos = []
const initialState = {
    value: '',
    completed: false
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case ADDITEM: return {
            ...state, 
        }
        case DELETEITEM: return {
            ...state,
        }
        default: 
            return state;
    }
}