import { ADD_TODO } from './actions';

const initialState = {
    todos: [
        {
            value: 'Walk Dog',
            completed: false,
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, { 
                todos: state.todos.concat([
                {
                    value: action.payload,
                    completed: false,
                }
            ])
        })
        default:
            return state;
    }
};