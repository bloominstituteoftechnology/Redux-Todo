import { ADD_TODO } from '../actions';

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
            
        default:
            return state;
    }
}