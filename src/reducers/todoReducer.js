import { ADD_TODO } from '../actions';

const initalState = {
    todos: []
}

export default (state = initalState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                todo: action.payload,
                completed: false
            }

            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        default:
            return state;
    }
}
