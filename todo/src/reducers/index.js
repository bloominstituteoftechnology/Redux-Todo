import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from '../actions';

const initialState = {
  todos: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: 

    return {
      ...state,
      todos: [...state.todos, {todo: action.payload, completed: false}]
    }

    case TOGGLE_COMPLETE:

    return {
        ...state,
        todos:  state.todos.map((todo,index) => {
            if (index === action.payload){
                return {...todo, completed: !todo.completed};
            }
            else {
                return todo;
            }
        })
    }

    case DELETE_TODO:

    return {
        ...state,
        todos: state.todos.filter((todo,index) => {
            return index !== action.payload;
        })
    }

    default:
      return state;
  }
};
