import { ADD_ITEM,
         TOGGLE_ACTIVE,
         DELETE_ITEM,
         DELETE_ALL,
         SORT_UP } from '../actions';

const initialState = {
  todos: [ ],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
        const newItem = [ {
          text: action.payload.text,
          completed: false,
          id: action.payload.id
        } ];

        const newList = state.todos;
        return { todos: newList.concat(newItem) }

    case TOGGLE_ACTIVE:
      return { todos: action.payload}

    case DELETE_ITEM:
      return { todos: action.payload }

    case DELETE_ALL:
      return { todos: action.payload }

    case SORT_UP:
      return { todos: action.payload }

    default:
      return state;
  }
}
