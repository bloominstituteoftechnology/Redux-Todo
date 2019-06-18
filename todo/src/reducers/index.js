import { ADD_TODO, TOGGLE_STATUS } from '../actions';
const initialState = {
    todos: [
        {
            id: 1,
            value: "Learn Redux",
            done: false,
        }
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload] }
        case TOGGLE_STATUS:
            return { ...state, 
                    todos: [...state.todos.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo) ]}    
        default:
            return state;
    }
} 

export default reducer;