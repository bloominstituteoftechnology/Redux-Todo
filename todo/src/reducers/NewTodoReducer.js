import {NEW_TODO, todoList} from './../actions/index';


const NewTodoReducer = (state = {}, action) => {
    switch (action.type){
        case NEW_TODO:
            return Object.assign({}, state, {todoList: [...todoList, {value: action.payload}]});
        default: 
        return state;
    } 
}

export {NewTodoReducer};

