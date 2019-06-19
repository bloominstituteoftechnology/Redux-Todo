import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.newTodo)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: (state.todos[action.id].complete = !state.todos[action.id]
          .complete)
      };
  }
};

export default reducer;
