import {ADD_ITEM} from '../actions'

const initialState = {
    todos: [{
        value: 'Do the dishes.',
        completed: false
      }]
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case ADD_ITEM:
        return {todos:[...state.todos, action.payload]}
        default:
        return state;
    }
}