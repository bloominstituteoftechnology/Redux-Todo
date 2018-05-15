import { ADD_TODOS, TOGGLE_COMPLETED } from '../actions'; 

const settingState = 
  [
    {
      todo: 'do something',
      completed: false,
      id: 0
    },
    {
      todo: 'do something else',
      completed: false,
      id: 1
    }
  ]


export const reducersForToDo = (state = settingState, action) => {
  switch (action.type) {
    case ADD_TODOS:      
      return state.concat(action.payload);

    case TOGGLE_COMPLETED:
      console.log("clicked")
      return state;
    default:
      return state;
  }
};