import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TODO:
        // let newArr = todos.slice();
        // newArr.push({
        //   value: action.payload,
        //   completed: false,
        // });
        // return {
        //   ...todos,
        //   todos: newArr
        // };
            return [...todos, action.payload];
            // return todos.concat(action.payload);
        case TOGGLE_COMPLETE:
            // todos[action.payload].complete = !todos[action.payload].complete;
            // return todos;
            return todos.map(todo => {
                if (todo.id === action.payload) {
                  return Object.assign({}, todo, { complete: !todo.complete });
                }
                return todo;
              });
        default:
            return todos;
    }
};