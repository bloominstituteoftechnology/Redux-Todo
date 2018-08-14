import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
    todos: [
        {value: 'Test', completed: false, id: 0},
        {value: 'Another one', completed: false, id: 1}
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log('add todo');
            const newArr = state.todos.slice()
            newArr.push({
                value: action.payload,
                completed: false,
                id: state.todos.length
            });
            return Object.assign({}, state, {todos: newArr})
        case TOGGLE_COMPLETED:
            const arr1 = state.todos.slice(0, action.id);
            const arr2 = [{value: state.todos[action.id].value, completed: !state.todos[action.id].completed, id: action.id}]
            const arr3 = state.todos.slice(action.id + 1, state.todos.length);
            const concat = arr1.concat(arr2).concat(arr3);
            return Object.assign({}, state, {todos: concat})
        default:
            return state;
    }
}