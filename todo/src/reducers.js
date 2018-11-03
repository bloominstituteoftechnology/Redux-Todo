import { ADD_TODO, TOGGLE_COMPLETED } from './actions.js'

const initialState = {
    todos: [{name: 'sample 1', id: '1'}, {name: 'sample 2'}, {name: 'sample 3'}]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {todos: [...state.todos, {
                name: action.payload,
                id: Date.now(),
                completed: false,
                className: 'todo'
            }]}
        case TOGGLE_COMPLETED: 
            return {todos: state.todos.map(todo => 
                (todo === action.payload)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )}
        default:
            return state;
    }
}