import {
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    COMPLETE_TOGGLE
} from '../actions';

const initialState = {
    todos: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_TODO :
            return {
                ...state, 
                todos: [
                    ...state.todos, 
                    {value: action.payload, completed: false}
                ]
            };
        
        case COMPLETE_TOGGLE :
            return {
                ...state,
                todos: state.todos.map((todo, i) => 
                    i === action.payload 
                    ? {...todo, completed: !todo.completed}
                    : todo
                )
            };
        
        case DELETE_TODO :
            return {
                ...state, 
                todos: state.todos.filter((todo, i) => i !== action.payload)
            };
        
        case UPDATE_TODO :
            return {
                ...state,
                todos: state.todos.map((todo, i) => 
                    i === action.payload.index
                    ? {...todo, value: action.payload.value }
                    : todo
                )
            };
        
        default: return {...state}
    }
}