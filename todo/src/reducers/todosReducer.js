import { ADD_TODO, TOGGLE_TODO } from '../actions';

 const initialState = {

         todos: [
            {event: 'complete redux todo app', completed: false},
            {event: 'move to washington', completed: false}
        ]

 };

 export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            const newTodo = {
                event: action.payload,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo,index) => 
                action.payload === index ? {...todo, completed: !todo.completed } : todo)
            };
        default:
            return state;
    }
} 