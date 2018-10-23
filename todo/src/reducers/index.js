import {ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO} from '../actions/index';


const initialState = {
    todos: []
}

export const toDoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
        return state = { todos: [...state.todos, action.payload]};
        case TOGGLE_COMPLETE: 
        let todos = state.todos.map(todo =>{ 
            if(todo.id === action.payload){
                todo.completed = !todo.completed
                return todo
            }
            else{
                return todo
            }
        });
        
        return {...state, todos: todos};

        case DELETE_TODO: 
        let newlist = state.todos.filter(todo => todo.id !== action.payload);
        return {...state, todos: newlist}

        default: 
        return state;
    }


}