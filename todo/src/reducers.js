import { ADD_TODO } from './actions.js'

const initialState = {
    todos: ['SAMPLE1', 'SAMPLE2', 'SAMPLE3']
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        default:
            return state;
    }
}