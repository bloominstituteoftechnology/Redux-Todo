import {ADD_NEW_TODO, TOGGLE_TODO} from "../actions";

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
    console.log(state);
    console.log(action)
    switch(action.type){
        case ADD_NEW_TODO:
        return{
              ...state,
              todos:[
                ...state.todos,
                {
                    value: action.payload,
                    completed: false
                }
              ]
            
        }
        case TOGGLE_TODO:{
            return {
            ...state,
            todos:
            state.todos.map(todo =>
                todo.value === action.payload.value ? { ...todo, completed: !todo.completed } : todo
              )
            
        }}
        default:
        return state;
    }
}

export default reducer