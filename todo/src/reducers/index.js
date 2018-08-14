import {ADD_TODO} from '../actions/index';
import {TOGGLE_TODO} from '../actions/index';

export function todos(state = [], action){
    switch(action.type){
        case ADD_TODO:
            return Object.assign({},state, {
                id: action.id,
                text: action.text,
                completed: false,
            })
        default:
            return state;
    }
}