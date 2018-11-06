import {NEW_TODO} from "../actions/index";


const initialState = {
    todos: [{
    id: 0,
    value: "",
    }]
}


export const todosReducer = ( previousState = initialState, action) => {
        switch(action.type){
            case NEW_TODO: 
                return { todo:{...previousState, ...action.payload}}

            default: return previousState;
        }
}