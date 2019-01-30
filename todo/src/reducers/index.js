import { ADD_ITEM, TOGGLE_ACTIVE } from '../actions';

const initialState = {
  todos: [ ],
}

export default (state = initialState, action) => {
  console.log('REDUCER STATE: ', state)
  console.log('REDUCER ACTION: ', action)
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


    default:
      return state;
  }
}
