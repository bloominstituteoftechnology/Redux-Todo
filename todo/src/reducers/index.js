// import { combineReducers } from 'redux';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, GET_TODOS } from '../actions';

const initialToDoState = {
    todos: [
        {value: 'Walk The Cat', completed: false}
    ]
}

const todoReducer = ( state = initialToDoState, action ) => {
    switch ( action.type ) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { value: action.payload, completed: false }]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((item, index) => {
                    if (index === action.payload){
                        return { ...item, completed: !item.completed };

                    } else { return item };
                })
            };
            case REMOVE_TODO:
                return {todos: state.todos.filter(item => !item.completed)}
            case GET_TODOS:
                return action.payload;


            default: return state;
    }
}

export default todoReducer;