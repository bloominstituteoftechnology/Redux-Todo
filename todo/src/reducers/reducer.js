import {ADD_TODO, REMOVE_TODO, TOGGLE_COMPLETED} from '../actions/actions.js'

const initialState = {todos: []}

//state.todos is an array of todo objects 
export const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, 
                state, 
                {todos: state.todos.concat([action.payload])})

        case REMOVE_TODO:
            console.log('in removetodo');
            return Object.assign({},
                state,
                {todos: state.todos.filter(todo =>{
                    return (todo.completed === false)
                })}
            )

            
        case TOGGLE_COMPLETED:
            return Object.assign({},
                state,
                {todos: state.todos.map(todo => {
                    if(todo.id === action.payload){
                        return Object.assign({}, todo, {completed: !todo.completed})
                    }else{
                        return todo
                    }
                })})


        default:
            return state;
    }

}