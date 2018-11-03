import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from './actions.js'

const initialState = {
    todos: [{name: 'sample 1', id: '1'}, {name: 'sample 2', id: '2'}, {name: 'sample 3', id: '3'}]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {todos: [...state.todos, {
                name: action.payload,
                completed: false,
                className: 'todo',
                id: Date.now()
            }]};
        case TOGGLE_COMPLETED: 
            return {todos: state.todos.map(todo => 
                (todo.id === action.payload.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )};
        case DELETE_TODO: 
            return {todos: state.todos.filter(todo => 
                todo.id !== action.payload.id
            )};
        default:
            return state;
    }
}