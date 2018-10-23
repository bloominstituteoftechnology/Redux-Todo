import {UPDATE_TODOS} from '../actions';

const initialState= {
    todos:[
        {
           value: 'Walk the dog',
           completed: false 
        }
    ]
}

const todoReducer = (state=initialState, action) => {
   console.log("Inside reducer", action, state)
    switch(action.type) {
        case UPDATE_TODOS:
        return {...state, 
            todos : [...state.todos, {value: action.payload, completed:false}]
            
        }
        
        default:
        return state;
    }
    
}

export default todoReducer;