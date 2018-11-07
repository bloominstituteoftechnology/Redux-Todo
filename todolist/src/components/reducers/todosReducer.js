import {NEW_TODO} from "../actions/index";


const initialState = []



export const todosReducer = ( previousState = initialState, action) => {
        switch(action.type){
            case NEW_TODO: 
                return [ ...previousState,
                    {
                        id: action.id,
                        todo: action.todo,
                        completed: false
                    }
                ]
            default: return previousState;
        }
}