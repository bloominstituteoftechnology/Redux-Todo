import {ADD_TODO} from '../actions/index';


const initialState = {
    todos: [{value: 'd', completed: false}]
}

export const toDoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
        return state = { todos: [...state.todos, action.payload]}
        default: 
        return state;
    }


}