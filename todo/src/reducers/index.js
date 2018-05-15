import { DELETE_TODO, ADD_TODO, COMPLETE_TODO } from "../actions";


export default (state = {todos: []}, action) => {
    switch (action.type) {
        case 'DELETE_TODO':
            return state.filter(item => item !== action.payload);
        case 'ADD_TODO':
            return state.concat(action.value)
        case 'COMPLETE_TODO':
            return Object.assign({}, state, {completed: true})
        default:
            return state;
    }
};
