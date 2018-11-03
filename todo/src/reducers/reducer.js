import {ADD_TODO, TOGGLE_COMPLETED} from '../actions/actions.js'

const initialState = {todos: []}


export const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, 
                state, 
                {todos: state.todos.concat([action.payload])})

            
        case TOGGLE_COMPLETED:
            return Object.assign({}, 
                state,
                {todos: state.todos.map(todo => {
                    if(todo.id === action.payload){
                        return Object.assign({}, todo, {completed: !todo.completed})
                    }
                })})

        default:
            return state;
    }

}