import {
  ADD_TODO,
  TOGGLE_COMPLETE
} from '../actions';

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          todo: action.payload,
          completed: false
        }
      ];
    case TOGGLE_COMPLETE:
      return todos.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          :todo
      )
    default:
      return todos
  }
};

// export default todosReducer;
