import { HANDLE_CHANGE } from '../Actions/';



const initialState = {
    todos: [{
        value: 'Walk the Dog', 
        completed: false
    }],
    todo:''
}


const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_CHANGE:
        return {...state, todo: action.payload }
        
        default:  
            return state;
    }
}


export default todoReducer;