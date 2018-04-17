import { ADD_TO_DO, HIDE_TO_DO } from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TO_DO:
        return todos.concat(action.payload);
        case HIDE_TO_DO:
        return null;
        default:
        return todos;
    }
};