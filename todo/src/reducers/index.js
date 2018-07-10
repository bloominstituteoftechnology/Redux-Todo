import {ADD_TODO, TOGGLE_TODO} from '../actions';

const initialList = {
  todos: [
    {text: "fjaoifjowf", completed: false, id: 0 + "fjaoifjowf"},
    {text: "jpwriowej", completed: false, id: 1 + "jpwriowej"},
    {text: "kpkfpkfwpk", completed: false, id: 2 + "kpkfpkfwpk"}
  ]
}

export default (state = initialList, action) => {
  switch(action.type) {
    case ADD_TODO:
      /*return [...state, action.payload];*/
      let newTodos = state.todos.slice();
      newTodos.push(action.payload);
      return Object.assign({}, state, {todos: newTodos});
    case TOGGLE_TODO:
      {/*return state.todos.map(todo => {
        if (todo.id === action.payload) {
          return Object.assign({}, todo, {completed: !todo.completed});
        }
        return todo;
        });*/}

        let toggleTodos = state.todos.slice().map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
            return todo;
          }
          return todo;
        })
        return Object.assign({}, state, {todos: toggleTodos});
      case DELETE_TODO:
        return 'yes';
    default:
      return state;
  }
}
