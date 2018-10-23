import {
    CREATE_TODO,
    UPDATE_TODO,
    CLEAR_COMPLETED,
    COMPLETE_TOGGLE
} from '../actions';

const initialState = {
    todos: [
        {value: 'Bake Cookies', completed: false},
        {value: 'Do Laundry', completed: false}
    ],
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
        
        default: return {...state}
    }
}