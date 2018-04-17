import { ADDTODO, REMOVE_TODO, TOGGLE_COMPLETE, IMPORT_STATE } from '../actions/todoActions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADDTODO:
            todos = [...todos, action.payload];
            return todos;

        case REMOVE_TODO:
            const id = Number(action.payload);
            todos = [...todos.slice(0, id), ...todos.slice(id + 1)];
            return todos;
        
        case TOGGLE_COMPLETE:
            todos = todos.map((todo, i) => {
                if (i === Number(action.payload)) {
                    return Object.assign({}, {value: todo.vlaue, completed: !todo.completed});
                }
                return todo;
            });
            return todos;

        case IMPORT_STATE:
            default:
                return todos;
    }
};