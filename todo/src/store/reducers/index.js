import {ADD_TODO, TOGGLE_TODO} from '../actions';

// currentState = reducer(currentState, action) //returns object that has the same shape as the state
const initialState = {
    todos: [
        {value:'Walk Chuckie', completed:false},
    ],
}; //state is always an object

export const todoReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD_TODO:
            return{...state, todos:[...state.todos,action.payload]}
        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo,index)=>{
                    if(index===action.payload){
                        return {...todo, completed: !todo.completed};
                    }else{
                        return todo;
                    }
                })
            }
        default:
            return state;
    }
}// need to pass reducer to store