export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';

export const addToDo = (text, id) => {
  return {
    type: ADD_ITEM,
    payload: {
      text: text,
      id: id
    }
  }
}

export const toggleActive = update => {
  return {
    type: TOGGLE_ACTIVE,
    payload: update
  }
}
