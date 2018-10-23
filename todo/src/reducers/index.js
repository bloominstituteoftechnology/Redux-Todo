import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = 
{
    todos: 
    [
        {
            id: 0,
            value: '',
            completed: false
        }
    ]
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state,
                    todos: [...state.todos, {id: action.id, value: action.payload, completed: false}]
                   }
                   
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return { ...todo, completed: !todo.completed};
                    } else {
                        return todo;
                    }
                }
            )}

        case DELETE_TODO:
            return {
                ...state,
                todos: [ ...state.todos.filter(todo => todo.id !== action.payload)]
            }           
        default:
            return state;
    }
}

export default todos;