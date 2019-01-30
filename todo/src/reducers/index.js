import { ADD_ITEM } from '../actions';

const initialState = {
  todos: [ { text: 'text here', completed: false } ],
}

export default (state = initialState, action) => {
  console.log('REDUCER STATE: ', state)
  console.log('REDUCER ACTION: ', action)
  switch(action.type) {
    case ADD_ITEM:
          const newItem = [ {
            text: action.payload,
            completed: false
          } ];

          const newList = state.todos;
          console.log('NEWLIST: ', newList)
          return { todos: newList.concat(newItem) }
      break;
    default:
      return state;
  }
}
