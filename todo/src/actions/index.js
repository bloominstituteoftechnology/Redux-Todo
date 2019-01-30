export const ADD_ITEM = 'ADD_ITEM';

export const addToDo = text => {
  console.log('ACTION TEXT: ', text)
  return {
    type: ADD_ITEM,
    payload: text
  }
}
