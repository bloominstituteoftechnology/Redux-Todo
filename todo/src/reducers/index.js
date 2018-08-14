import {ADD_TODO} from '../actions';

const initialState={
    todos:[]
}
export default function toDoApp(state=initialState,action) {
    switch(action.type) {
        case ADD_TODO:
        return Object.assign({},state,{
            todos:[...state.todos,{
                value:action.value,
                completed:false
            }
        ]
        })
        default: 
            return state
    }
}