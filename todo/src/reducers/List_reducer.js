import {FETCH_TODOS, todoList} from './../actions/index';


export const ListReducer = (state = {todoList: []}, action) => {
    switch (action.type){
        case FETCH_TODOS:
            return [...todoList, ...action.payload];
        default: 
        return todoList;
    } 
}
