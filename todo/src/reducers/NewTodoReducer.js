import {NEW_TODO, todoList} from './../actions/index';


const NewTodoReducer = (state = [], action) => {
    switch (action.type){
        case NEW_TODO:
            return [...state, {value: action.payload, completed: false}];
        default: 
        return state;
    } 
}

export {NewTodoReducer};