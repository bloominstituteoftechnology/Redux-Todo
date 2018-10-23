import {UPDATE_TODOS, TOGGLE_COMPLETE, DELETE_TODO} from '../actions';


const initialState= {
    todos:[
        {
           value: 'Walk the dog',
           completed: false 
        }
    ]
}

const todoReducer = (state=initialState, action) => {
   
    switch(action.type) {
        case UPDATE_TODOS:
        return {...state, 
            todos : [...state.todos, {value: action.payload, completed:false}]};
        case TOGGLE_COMPLETE:
        return {...state,
            todos: state.todos.map((todo, index) => {
                if (index===action.payload) {
                    return {...todo, completed: !todo.completed};
                } else {
                    return todo;
                }
            })
        }
        case DELETE_TODO:
        return {
         ...state,
         todos : state.todos.filter((todo, index) => {
             if (index!== action.payload) {
                 return todo;
             }
         })   
        }
        default:
        return state;
    }
    
}

export default todoReducer;