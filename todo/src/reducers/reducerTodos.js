import { ADD_ITEM, GET_ITEMS } from '../actions/actionTodo';

export default (todos= [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...todos, action.payload];
        case GET_ITEMS:
            return action.payload;
        default:
            return todos;
    }
};