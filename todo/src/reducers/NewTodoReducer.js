import {NEW_TODO, todoList} from './../actions/index';


const NewTodoReducer = (state = [{value: '', completed: false}], action) => {
    switch (action.type){
        case NEW_TODO:
            return todoList.push(Object.assign({}, state, {value: action.payload}));
        default: 
        return state;
    } 
}

export {NewTodoReducer};