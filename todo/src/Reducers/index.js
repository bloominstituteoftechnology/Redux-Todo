import { HANDLE_CHANGE, ADD_TODO, TOGGLE_COMPLETED } from '../Actions/';



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
            if (state.todo === ''){
                return;
            }else{
                return {
                ...state,
                todos: [...state.todos, {value: action.payload, completed: false}], todo:'' 
                }
            }    
        case TOGGLE_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((item, id) => {
                    console.log(item, id)
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