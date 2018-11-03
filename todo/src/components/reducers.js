import {ADD_TODO} from './actions'

const initialState = {todo:[]};

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
        return Object.assign({}, state, {todo:[...state.todo, {todo:action.payload, completed:false, id:Date.now()}]})
        default:
        return state;
    }
}