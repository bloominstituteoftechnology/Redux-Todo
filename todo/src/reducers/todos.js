import { ADD_TODO, TOGGLE_TODO } from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            // return todos.concat(action.payload)
            return [ ...todos, actions.payload ]
        case TOGGLE_TODO:
            // todos[action.payload].complete = !todos[action.payload].complete;
            // return todos;

            return todos.map((todo, index) => {
                if (index === action.payload) {
                  return Object.assign({}, todo, {
                    completed: !todo.completed
                  })
                }
                return todo
              });
        default:
            return todos;
    }
};