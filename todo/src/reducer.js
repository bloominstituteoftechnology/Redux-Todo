import { ADD_TODO } from './actions'

let defaultState = {
    // header: 'Todo List',
    todos: [{
        todo: 'init',
        completed: false
    }]
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case ADD_TODO:
            let newTodos = [ ...state.todos, action.payload ]
            return Object.assign({}, state, { todos: newTodos });
        default: 
            return state;
    }
}