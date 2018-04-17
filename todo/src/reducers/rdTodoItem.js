import {ADD_TODO, GET_TODOS, REMOVE_TODO, TOGGLE} from "../actions";

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return todos.concat(action.payload);
        case REMOVE_TODO:
            return todos.filter(todo => !todo.completed);
        case GET_TODOS:
            return action.payload;
        case TOGGLE:
            return todos[action.payload].completed = !todos[action.payload].completed;
        default:
            return todos;

    }
};