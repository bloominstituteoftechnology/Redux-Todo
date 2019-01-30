export const ADD_ITEM = 'ADD_ITEM';

export const addToDo = text => {
  return {
    type: ADD_ITEM,
    payload: text
  }
}
