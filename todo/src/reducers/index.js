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
    console.log('reducer initial state:', state);
    let newState = {todos: [...state.todos]};
    switch (action.type) {
        case ADD_TODO:
            console.log('ADD_TODO reducer triggered');
            newState.todos.push(action.payload);
            console.log('ADD_TODO reducer newState:', newState);
            return newState;
        case TOGGLE_COMPLETE:
            console.log('TOGGLE_COMPLETE reducer triggered');
            const filteredTodo = newState.todos.find( (element, i) => action.payload === i);
            filteredTodo.completed = !filteredTodo.completed;
            newState.todos.splice(action.payload, 1, filteredTodo);
            console.log('TOGGLE_COMPLETE reducer newState:', newState);
            return newState;
        default:
            return state;
    }
}
