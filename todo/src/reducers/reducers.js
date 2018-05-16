import { ADD_TODO, COMPLETE_TOGGLE } from '../actions'; 

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return todos.concat(action.payload);
        case COMPLETE_TOGGLE:
            todos[action.payload].complete = !todos[action.payload].complete;
            return todos;
        default:
            return todos;
    }
};
