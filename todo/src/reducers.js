import { ADD_TODO } from './actions.js'

const initialState = {
    todos: ['TEST']
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        default:
            return state;
    }
}