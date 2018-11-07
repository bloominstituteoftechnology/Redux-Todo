import {NEW_TODO} from "../actions/index";


const initialState = []



export const todosReducer = ( previousState = initialState, action) => {
        switch(action.type){

            case NEW_TODO:

                return [ ...previousState,
                    {
                        ...action.payload,
                        id: previousState.length + 1
                    }
                ]

            default: return previousState;
        }

    }