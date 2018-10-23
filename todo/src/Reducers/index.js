import { HANDLE_CHANGE, ADD_TODO, REMOVE_COMPLETED } from '../Actions/';



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
            return {
                ...state, 
                todo: action.payload 
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {value: action.payload, completed: false}] 
            }
        case REMOVE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((item, id) => {
                    console.log('Looped')
                    if (id === action.payload){
                        return {...item,  completed: !item.completed}
                    }else{
                        return item;
                    }
                })
            }    
        default:  
            return state;
    }
}


export default todoReducer;