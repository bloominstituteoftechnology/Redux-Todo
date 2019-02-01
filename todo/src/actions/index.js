export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ALL = 'DELETE_ALL';

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

export const deleteItem = update => {
  return {
    type: DELETE_ITEM,
    payload: update
  }
}

export const deleteAll = () => {
  return {
    type: DELETE_ALL,
    payload: []
  }
}
