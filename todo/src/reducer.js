import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE } from './actions';

let defaultState = {
    todos: [
        {
            name: 'init',
            completed: false,
            id: Date.now()
        },
        {
            name: 'second',
            completed: true,
            id: Date.now()
        }
    ]
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case ADD_TODO:
            let newTodos = [ ...state.todos, action.payload ]
            return Object.assign(
                {}, 
                state, 
                { todos: newTodos }
            );

        case TOGGLE_COMPLETE:
            return {
                ...state,
                todos: state.todos.map((todo, index) => 
                    index === action.payload
                    ? { ...todo, completed: !todo.completed}
                    : todo
                )
            }
            
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, index) => 
                    index !== action.payload
                )
            }
        default: 
            return state;
    }
}