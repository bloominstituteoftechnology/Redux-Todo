import { CREATE_TODO } from '../actions';
import { HANDLE_CLICK } from '../actions';

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO:
            let newTodo = {
                value: action.payload,
                completed: false,
            };
            return state.concat(newTodo);
        case HANDLE_CLICK:
            const item = document.getElementById(action.payload.index);
            if (action.payload.todos[action.payload.index].completed === true) {
                item.style.textDecoration = "line-through";
            }
            else {
                item.style.textDecoration = "none";
            }
        default:
            return state;
    }
}