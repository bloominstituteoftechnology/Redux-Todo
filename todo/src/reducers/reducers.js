import {ADD_TODO} from '../actions/actions';

const initialState = {todo:["go to the park","cook dinner","sleep"]};

export default(state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: 
        return Object.assign({}, state, {todo:[...state.todo, {todo:action.payload, complete:false, id:Date.now()}]})

        default:
        return state;
    }
}
