import {ADD_NEW_TODO} from "../actions";

const initialState ={
    todos: [
        {
            value: 'Walk the Dog.',
            completed: false
        },
        {
            value: 'Learn Redux.',
            completed: false
        },
    ]
}

const reducer = (state = initialState, action) =>{
    console.log(action);
    switch(action.type){
        case ADD_NEW_TODO:
        return{
            todos:[
                ...state.todos,
                {
                    value: action.payload.value,
                    completed: false
                }
            ]
        }
        default:
        return state;
    }
}

export default reducer