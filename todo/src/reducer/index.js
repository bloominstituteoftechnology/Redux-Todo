import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions';

const initialState = [{ text: 'Clean Basement', completed: false, id: 0 }];

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      let toggleTodo = state.todos.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed 
          return item;
        } else {
          return item;
        }
      })
      return {
        todos: toggleTodo
      }
      case REMOVE_TODO:
        let removeTodo = state.todos.filter(item => item.id !== action.payload)
        return {
          todos: removeTodo
        }
    default:
      return state;
}
};