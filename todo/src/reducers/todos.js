import { ADD_TODO, DELETE_TODO, TODO_INPUT, TOGGLE_COMPLETE, CLEAR_COMPLETE, SET_TODOS } from '../actions'

const initialState = {
    todos: [
        {
            value: 'Organize Garage',
            completed: false,
            id: 1
        },
        {
            value: 'Bake Cookies',
            completed: false,
            id: 2
        }
    ],
    list: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let addTodos = state.todos.slice();
            addTodos.push(action.payload);
            return Object.assign({}, state, { todos: addTodos, list: '' });

        case DELETE_TODO:
            let deleteTodos = state.todos.slice().filter(todo => todo.id !== action.payload)
            return Object.assign({}, state, { todos: deleteTodos });

        case TODO_INPUT:
            return Object.assign({}, state, { list: action.payload });

        case TOGGLE_COMPLETE:
            let toggleTodos = state.todos.slice()
                .map(list => {
                    if (list.id === action.payload) {
                        list.completed = !list.completed;
                        return list;
                    }
                    return list;
                });
            return Object.assign({}, state, { todos: toggleTodos });

        case CLEAR_COMPLETE:
            let clearTodos = state.todos.slice().filter(todo => !todo.completed)
            return Object.assign({}, state, { todos: clearTodos });

        case SET_TODOS:
            return Object.assign({}, state, { todos: action.payload });

        default:
            return state;
    }
}
