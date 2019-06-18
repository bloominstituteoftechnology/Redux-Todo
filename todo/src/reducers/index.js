import { ADD_TODO, TOGGLE_STATUS, DELETE_TODO } from '../actions';
const initialState = {
    todos: [
        {
            id: 1,
            value: "Learn Redux",
            done: false,
        }
    ]
}

function reducer(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload] }
        case TOGGLE_STATUS:
            return { ...state, 
                    todos: [...state.todos.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo) ]}    
        case DELETE_TODO:
            console.log(action.payload)
                return { ...state, 
                    todos: [...state.todos.filter(todo => todo.id !== action.payload) ]} 
        default:
            return state;
    }
} 

export default reducer;