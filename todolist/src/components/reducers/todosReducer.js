import {NEW_TODO} from "../actions/index";


const initialState = [
     {
         id: 0,
         todo: '',
         completed: false
     }
]


export const todosReducer = ( previousState = initialState, action) => {
        switch(action.type){
            case NEW_TODO: 
                return [
                    ...previousState,
                    {
                        id: action.id,
                        todo: action.payload,
                        completed: false
                    }
                ]
            default: return previousState;
        }
}