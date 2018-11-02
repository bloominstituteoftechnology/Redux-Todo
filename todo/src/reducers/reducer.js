import {ADD_TODO, REMOVE_TODO} from '../actions/actions.js'

const initialState = {todos: []}


export const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, 
                state, 
                {todos: state.todos.concat([action.payload])})

            
        case REMOVE_TODO:
            break;
        default:
            return state;
    }

}