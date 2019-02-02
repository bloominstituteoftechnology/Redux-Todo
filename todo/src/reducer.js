import { ADD_TODO } from './actions'

let defaultState = {
    header: 'Todo List',
    todos: [{
        todo: 'init'
    }]
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
        case ADD_TODO:
            return { ...state, todos: state.todos };
        default: return state;
    }
}