import { ADD_TODO_ITEM, COMPLETE_TODO_ITEM, DELETE_TODO_ITEM } from '../actions';

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      console.log('add');
      return [ ...state,
        {
          id: action.id,
          payload: action.payload,
          completed: false
        }
      ];

    case COMPLETE_TODO_ITEM:
    console.log('completed', action.id);
    return state.map(todo =>
      (todo.id === action.id)
        ? {...todo, completed: !todo.completed}
        : todo
      );

    case DELETE_TODO_ITEM:
      console.log('deleted', action.id);
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
}

export default todo;
