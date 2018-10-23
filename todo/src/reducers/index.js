import {
    CREATE_TODO,
    UPDATE_TODO,
    CLEAR_COMPLETED,
    COMPLETE_TOGGLE,
    SET_LIST
} from '../actions';

const initialState = {
    todos: sessionStorage.getItem('myToDoList') ? JSON.parse(sessionStorage.getItem('myToDoList')) : [],
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
        
        case CLEAR_COMPLETED :
            return {
                ...state, 
                todos: state.todos.filter(todo => todo.completed !== true)
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
        
        case SET_LIST :
            return {
                ...state,
                todos: action.payload
            };
        
        default: return {...state}
    }
}