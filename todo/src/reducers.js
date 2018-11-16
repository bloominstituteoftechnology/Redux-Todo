import { ADD_TODO, TOGGLE_COMPLETED } from './actions.js'

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {todos: [...state.todos, {
                name: action.payload,
                completed: false,
                className: 'todo',
                id: Date.now()
            }]}
        case TOGGLE_COMPLETED: 
            return {todos: state.todos.map(todo => 
                (todo.id === action.payload.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )}
        default:
            return state;
    }
}