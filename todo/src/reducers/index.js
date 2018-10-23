import {ADD_TODO, TOGGLE_COMPLETE} from '../actions/index';


const initialState = {
    todos: [{value: 'd', completed: false}]
}

export const toDoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
        return state = { todos: [...state.todos, action.payload]};
        case TOGGLE_COMPLETE: 
        let todos = state.todos.map(todo =>{ 
            if(todo.id === action.payload){
                todo.completed = !todo.completed
                console.log(todo)
                return todo
            }
            else{
                return todo
            }
        });
        console.log(todos)
        
        return {...state, todos: todos};
        default: 
        return state;
    }


}