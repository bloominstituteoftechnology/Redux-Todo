import { MARK_DONE } from '../actions/index';

const initialState = {
    todos: [{
        value: 'Walk the dog',
        completed: 'false',
        id: 1
    }]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case MARK_DONE:
            return state.todos.map(todo =>
                (todo.id === action.id) 
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state;
    }
};