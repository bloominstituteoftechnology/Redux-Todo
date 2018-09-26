import {ADD_TODO} from '../actions';

export const initialState = [];

export default function todo(state=initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {id: action.id, text: action.text, completed: false}]
        default:
            return state
    }
}

