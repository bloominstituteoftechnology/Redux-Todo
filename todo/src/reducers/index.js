import { ADD_TODO, TOGGLE_COMPLETE, REMOVE_TODO } from '../actions';

const initialState = {
  todos: [
    {
      id: 0,
      completed: false,
      text: 'Walk the dog'
    }
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload],
      })

      case TOGGLE_COMPLETE:
      console.log(state.todos);
      const todoToggledArr = state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }})
        console.log(todoToggledArr);
      return Object.assign({}, state, {
        todos:  todoToggledArr
      })

      case REMOVE_TODO:
      const newTodoArr = state.todos.filter((todo) => todo.id !== action.payload
    );
    return { todos: [...newTodoArr] }
      default:
      return state;
  }
}
