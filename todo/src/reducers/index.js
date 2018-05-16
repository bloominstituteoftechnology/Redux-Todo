import { CREATE_TODO } from '../actions';

let non_state = [];
console.log('non_state', non_state);

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO:
            let newTodo = {
                name: action.payload,
                id: non_state.length,
            };
            non_state.push(newTodo);
            return state.concat(newTodo);
        default:
            return state;
    }
}