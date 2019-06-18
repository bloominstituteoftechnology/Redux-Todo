import { ADD_TODO, TOGGLE_STATUS, DELETE_TODO, LOAD_TODOS } from '../actions';
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
    switch (action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload] }
        case TOGGLE_STATUS:
            window.localStorage.setItem('savedTasks', JSON.stringify(state.todos.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo )))
            return { ...state, 
                todos: [...state.todos.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo) ]}    
        case DELETE_TODO:
            window.localStorage.setItem('savedTasks', JSON.stringify(state.todos.filter(todo => todo.id !== action.payload)))
            return { ...state, 
                todos: [...state.todos.filter(todo => todo.id !== action.payload) ]} 
        case LOAD_TODOS:
            return { ...state, 
                todos: [ ...action.payload ]} 
        default:
            return state;
    }
} 

export default reducer;