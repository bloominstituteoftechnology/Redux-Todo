import { ADD_TODO, COMPLETE_TODO } from '../actions';

const initialState = [
    { task: 'Learn Redux', completed: false, id: Date.now()}
];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        case COMPLETE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return Object.assign({}, todo, { completed: !todo.completed });
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};