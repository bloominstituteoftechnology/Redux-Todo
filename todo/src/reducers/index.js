import { ADD_TODO, TOGGLE_COMPLETED } from "../actions/index";

const initialState = {
  todos: [
    {
      value: 'Walk the dog',
      completed: false
    }
  ]
}

const reducer = (state = initialState, action) => {
  //switch statement goes here
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        value: action.text,
        completed: false
      }
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index ? { ...todo, completed: !todo.completed } : todo
        )
      }

    default:
      return state;
  }
}


export default reducer;