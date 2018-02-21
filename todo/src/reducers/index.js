import { ADD_TODO_ITEM, COMPLETE_TODO_ITEM } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      console.log('add');
      return Object.assign({}, state,
        {
          id: action.id,
          payload: action.payload,
          completed: false
        }
      );
    // case COMPLETE_TODO_ITEM:
    //   console.log('completed');
    //   return state.map(todo =>
    //     (todo.id === action.id)
    //       ? {...todo, completed: !todo.completed}
    //       : todo
    //     )
    default:
      return state;
  }
}