import { ADD_TODOS } from '../actions'; 

const settingState = {
  toDos: [
    {
      todo: 'do something',
      completed: false,
    },
    {
      todo: 'do something else',
      completed: false,
    }
  ],
  
}


export const reducersForToDo = (state = settingState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      console.log(state)
      return Object.assign({}, {toDos: [...state.toDos, action.payload]});
    default:
      return state;
  }
};