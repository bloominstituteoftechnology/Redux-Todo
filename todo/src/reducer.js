import { ADD_TODO } from './actions'

let defaultState = {
    // header: 'Todo List',
    todos: [{
        todo: 'init'
    }]
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case ADD_TODO:
            let newTodos = [ ...state.todos, action.newTodo ]
            return Object.assign({}, state, { todos: newTodos });
        default: 
            return state;
    }
}