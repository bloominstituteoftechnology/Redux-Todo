import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';

const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state,
        { todos: [...state.todos, { id: action.id, todo: action.text, completed: false}]

        })
    case TOGGLE_TODO:
        const todos = state.todos.map(todo => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed;
            return todo;
          } else {
            return todo;
          }
        })
        return Object.assign({}, state, { todos: todos });
    default:
      return state
  }
}

export default reducer;