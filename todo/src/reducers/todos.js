import { ADD_TODO, UPDATE_TODOITEM } from '../actions'

const todos = (state = [], action) => {

    switch (action.type) {
      case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false
        }
      ]

      case UPDATE_TODOITEM :
      return state.map(
        todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
        default:
        return state
     }

      };
      export default todos