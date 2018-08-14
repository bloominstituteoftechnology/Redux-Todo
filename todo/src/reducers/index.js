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
            return {
                todos: [
                    ...state,
                    {
                        value: action.payload,
                        completed: false,
                        id: state.todos.length
                    }
                ]
            }
        default:
            return state;
    }
}