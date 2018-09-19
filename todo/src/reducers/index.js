import { ADD_TODO, TOGGLE_COMPLETE } from '../actions/';

const initialState = {todos: [
    {
        value: 'Walk the dog.',
        completed: false
    },
    {
        value: 'Walk the human.',
        completed: false
    }
]};

export const todosReducer = (state = initialState, action) => {
    let newState = {todos: [...state.todos]};
    switch (action.type) {
        case ADD_TODO:
            newState.todos.push(action.payload);
            return newState;
        case TOGGLE_COMPLETE:
            const filteredTodo = newState.todos.find( (element, i) => action.payload === i);
            filteredTodo.completed = !filteredTodo.completed;
            newState.todos.splice(action.payload, 1, filteredTodo);
            return newState;
        default:
            return state;
    }
}
