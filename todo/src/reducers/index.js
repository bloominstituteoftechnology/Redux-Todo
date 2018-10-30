// import { combineReducers } from 'redux';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions';

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


            default: return state;
    }
}

export default todoReducer;