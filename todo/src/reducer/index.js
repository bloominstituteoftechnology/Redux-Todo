// import actions here
import { ADD_TODO } from '../actions/index';


export const initialState = {
    todos: [
        {
            value: 'Make todo list',
            completed: false
        }
    ]
};

export function ToDoReducer(state = initialState, action){
    switch (action.type){
        // add reducer logic here
        
        default: 
        return state;
    }
}