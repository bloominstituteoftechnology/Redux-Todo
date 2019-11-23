import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../Actions/index';
import { bindActionCreators } from 'redux';

const initialState = {
  todos: [
      {
          content:'',
          completed: false
      }

  ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        return {
            todos: [
                ...state.todos,
                {
                    value: action.payload,
                    completed: false
                }
            ]
        };
        case DELETE_TODO:
      return {
        todos: state.todos.filter((todo, id) => {
          if (id !== action.payload) {
            return todo;
          }
          return null;
        })
      };

      case TOGGLE_COMPLETED:
      return {
        todos: state.todos.map((todo, id) => {
          if (id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };

      default:
      return state;
    }
};

export default todoReducer;