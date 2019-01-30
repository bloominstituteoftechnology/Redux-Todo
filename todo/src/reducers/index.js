import { ADD_ITEM } from '../actions';

const initialState = {
  todos: [ { text: 'text here', completed: false } ],
}

export default (state = initialState, action) => {
  console.log(state)
  switch(action.type) {
    case ADD_ITEM:
          console.log('Reducer: ',  [ ...state.todos, { text: action.payload, completed: false} ]  )
      break;
    default:
      return state;
  }
}
