import {NEW_TODO} from "../actions/index";


const initialState = {
    todos: [{
    id: 0,
    todo: "",
    }]
}


export const todosReducer = ( previousState = initialState, action) => {
        switch(action.type){
            case NEW_TODO: 
                return  Object.assign(previousState, {
                    todo: action.payload,
                })

            default: return previousState;
        }
}