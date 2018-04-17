import {ADD_TODO, GET_TODOS, REMOVE_TODO} from "../actions";

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return todos.concat(action.payload);
        case REMOVE_TODO:
            return todos.filter(todo => !todo.completed);
        case GET_TODOS:
            return action.payload;
        default:
            return todos;

    }
};