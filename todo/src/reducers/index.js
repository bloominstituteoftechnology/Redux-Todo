import { MARK_DONE } from '../actions/index';

const initialState = {
    todos: [{
        value: 'Walk the dog',
        completed: false,
        id: 1
    }]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case MARK_DONE:
            const todos = state.todos.map(todo => { 
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed;
                        return todo;
                    } else {
                        return todo;
                    }
                }
            )
            return Object.assign({}, state, { todos: todos });
        default:
            return state;
    }
};